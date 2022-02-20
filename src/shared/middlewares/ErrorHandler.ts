import { Request, Response, NextFunction } from "express";

import { ApplicationError } from "../errors/ApplicationError";

import "express-async-errors";

export default (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (error instanceof ApplicationError) {
    return response.status(error.statusCode).json({
      message: error.message,
      status: "error",
    });
  }

  return response.status(500).json({
    message: error.message,
  });
};
