import { Router } from "express";
import { AuthController } from "./auth.controller";
export const authRouter = Router();
const controller = new AuthController();
authRouter.post("/login", (req, res, next) => controller.login(req, res, next));
