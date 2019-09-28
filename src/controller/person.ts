import { Request, Response } from 'express';
import { handlePromise } from './util';
import * as personservice from '../service/person';

export const getById = (httpRequest: Request, httpResponse: Response) => {
  handlePromise(personservice.getById(Number(httpRequest.params.id)), httpRequest, httpResponse);
};

export const getAll = (httpRequest: Request, httpResponse: Response) => {
  handlePromise(personservice.getAll(), httpRequest, httpResponse);
};

export const add = (httpRequest: Request, httpResponse: Response) => {
  handlePromise(personservice.add(httpRequest.body), httpRequest, httpResponse, 201);
};

export const update = (httpRequest: Request, httpResponse: Response) => {
  handlePromise(personservice.update(httpRequest.body), httpRequest, httpResponse);
};

export const remove = (httpRequest: Request, httpResponse: Response) => {
  handlePromise(personservice.remove(Number(httpRequest.params.id)), httpRequest, httpResponse);
};
