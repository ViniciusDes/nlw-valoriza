import { NextFunction, Request, Response } from "express";

const Middleware = (
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (err instanceof Error) {
    return response.status(400).json({
      sucess: false,
      error: err.message,
    });
  }

  return response.status(500).json({
    sucess: false,
    error: "Internal server error",
  });
};

export { Middleware };
