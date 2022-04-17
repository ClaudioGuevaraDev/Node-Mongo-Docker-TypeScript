import { Request, Response } from "express";

export const endpointNotFound = (req: Request, res: Response): Response => {
  return res.status(404).json({
    status: "error",
    message: "Endpoint not found",
  });
};
