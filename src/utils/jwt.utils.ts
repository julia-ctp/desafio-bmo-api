import jwt, { SignOptions } from "jsonwebtoken";
import "dotenv/config";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

export interface LoginPayload {
  id: string;
  name: string;
  lastName: string;
}

export function generateToken(
  payload: LoginPayload,
  expiresIn: SignOptions["expiresIn"] = "24h"
) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn });
}

export function verifyToken(token: string): LoginPayload {
  try {
    return jwt.verify(token, JWT_SECRET) as LoginPayload;
  } catch (error: any) {
    if (error.name === "TokenExpiredError") throw new Error("Token expirado");
    if (error.name === "TokenExpiredError") throw new Error("Token inválido");

    throw error;
  }
}
