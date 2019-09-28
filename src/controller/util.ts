import { Request, Response } from 'express';

export const handlePromise = (promise: Promise<any>, httpRequest: Request, httpResponse: Response, okStatus?: number): void => {
  promise
    .then(dto => {
      if (dto == undefined) {
        if (httpRequest.method === 'GET') {
          httpResponse.sendStatus(404);
        } else {
          httpResponse.sendStatus(okStatus || 204);
        }
      } else {
        httpResponse.json(dto);
      }
    })
    .catch(err => {
      httpResponse.sendStatus(500);
    });
};
