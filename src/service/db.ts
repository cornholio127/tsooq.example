import { PoolConfig, Pool } from 'pg';
import { QueryFactory } from 'tsooq';

const config: PoolConfig = {
  host: 'localhost',
  port: 5432,
  database: 'example',
  user: 'example',
  password: 'password',
};

const pool = new Pool(config);

export const create = QueryFactory.create(pool);
