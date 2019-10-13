import { PersonDto } from '../model';
import { create } from './db';
import { Person, Tables } from '../gen/public';
import { Record, Result } from 'tsooq';

const toDto = (rec: Record): PersonDto => ({
  id: rec.get(Person.ID),
  firstName: rec.get(Person.FIRST_NAME),
  lastName: rec.get(Person.LAST_NAME),
  email: rec.get(Person.EMAIL),
});

export const getById = (id: number): Promise<PersonDto> => {
  return create
    .select(Person.ID, Person.FIRST_NAME, Person.LAST_NAME, Person.EMAIL)
    .from(Tables.PERSON)
    .where(Person.ID.eq(id))
    .fetchSingleMapped(toDto);
};

export const getAll = (): Promise<PersonDto[]> => {
  return create
    .select(Person.ID, Person.FIRST_NAME, Person.LAST_NAME, Person.EMAIL)
    .from(Tables.PERSON)
    .fetchMapped(toDto);
};

export const add = (dto: PersonDto): Promise<Result<void>> => {
  return create
    .insertInto(Tables.PERSON, Person.FIRST_NAME, Person.LAST_NAME, Person.EMAIL)
    .values(dto.firstName, dto.lastName, dto.email)
    .execute();
};

export const update = (dto: PersonDto): Promise<Result<void>> => {
  return create
    .update(Tables.PERSON)
    .set(Person.FIRST_NAME, dto.firstName)
    .set(Person.LAST_NAME, dto.lastName)
    .set(Person.EMAIL, dto.email)
    .where(Person.ID.eq(dto.id))
    .execute();
};

export const remove = (id: number): Promise<Result<void>> => {
  return create
    .deleteFrom(Tables.PERSON)
    .where(Person.ID.eq(id))
    .execute();
};
