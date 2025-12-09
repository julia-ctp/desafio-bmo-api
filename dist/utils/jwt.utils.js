import jwt from "jsonwebtoken";
import "dotenv/config";
const JWT_SECRET = process.env.JWT_SECRET || "secret";
export function generateToken(payload, expiresIn = "24h") {
    return jwt.sign(payload, JWT_SECRET, { expiresIn });
}
export function verifyToken(token) {
    try {
        return jwt.verify(token, JWT_SECRET);
    }
    catch (error) {
        if (error.name === "TokenExpiredError")
            throw new Error("Token expirado");
        if (error.name === "TokenExpiredError")
            throw new Error("Token inválido");
        throw error;
    }
}
