import { Request, Response } from 'express';

const errorMiddleware = (err: any, _req: Request, res: Response) => {
  if (err.isJoi) {
    return res.status(400).json({
      message: err.details[0].message,
    });
  }

  return res.status(400).json({
    message: err.message,
  });
};

export default errorMiddleware;