import { Request, Response, NextFunction } from "express";
import { z, ZodError } from "zod";
import { Prisma } from "../generated/prisma/client";

export function errorHandler(
  error: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.log("Erro:", error);

  if (error instanceof ZodError) {
    return res.status(400).json({
      error: "Erro de validação",
      details: z.treeifyError(error),
    });
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2002") {
      return res.status(409).json({
        message: "Violação de unicidade",
        field: error.meta?.target,
      });
    }

    if (error.code === "P2025") {
      return res.status(404).json({
        error: "Registro não encontrado",
      });
    }
  }

  if (error.type === "entity.parse.failed") {
    return res.status(400).json({
      error: "JSON inválido",
    });
  }

  if (error.status === 404) {
    return res.status(404).json({ error: error.message });
  }

  return res.status(500).json({ error: "Erro interno no servidor" });
}
