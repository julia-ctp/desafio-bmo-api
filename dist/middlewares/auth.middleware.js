import { verifyToken } from "../utils/jwt.utils";
export function authMiddleware(req, res, next) {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ error: "Token não fornecido" });
        }
        const token = authHeader.split(" ")[1];
        const payload = verifyToken(token);
        req.employeeId = payload;
        next();
    }
    catch (error) {
        res.status(401).json({ error: error.message });
    }
}
