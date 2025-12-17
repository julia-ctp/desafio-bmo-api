import { Request, Response, NextFunction } from "express";
import { LoginPayload, verifyToken } from "../utils/jwt.utils";

export interface RequestWithEmployee extends Request {
  employee?: LoginPayload;
}

export function authMiddleware(
  req: RequestWithEmployee,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Token não fornecido" });
  }
  const token = authHeader.split(" ")[1];
  const payload = verifyToken(token);
  req.employee = payload;

  next();
}
