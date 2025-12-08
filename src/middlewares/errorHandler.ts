import { Request, Response, NextFunction } from "express";

export function errorHandler(
  error: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.log("Erro:", error);

  if (error instanceof Error) {
    return res.status(404).json({ error: error.message });
  }
  return res.status(404).json({ error: "Erro interno no servidor" });
}
