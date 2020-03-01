import { NextFunction, Request, Response } from 'express'

interface Controller {
  index(
    request: Request,
    response: Response,
    next?: NextFunction
  ): Promise<Response>;
  show(
    request: Request,
    response: Response,
    next?: NextFunction
  ): Promise<Response>;
  store(
    request: Request,
    response: Response,
    next?: NextFunction
  ): Promise<Response>;
  update(
    request: Request,
    response: Response,
    next?: NextFunction
  ): Promise<Response>;
  delete(
    request: Request,
    response: Response,
    next?: NextFunction
  ): Promise<Response>;
}
