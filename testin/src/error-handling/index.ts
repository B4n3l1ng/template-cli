import { NextFunction, Request, Response } from 'express';

export function notFound(req: Request, res: Response, next: NextFunction) {
  res.status(404).json({ message: 'This route does not exist' });
}

export function internalError(err: Error, req: Request, res: Response, next: NextFunction) {
  console.error('ERROR', req.method, req.path, err);

  if (!res.headersSent) {
    res.status(500).json({ message: 'Internal server error. Check the server console' });
  }
}
