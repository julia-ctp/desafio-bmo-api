import { Router } from "express";
import { ContactController } from "./contact.controller";
export const contactRouter = Router();
const controller = new ContactController();
contactRouter.post("/contact", (req, res, next) => controller.create(req, res, next));
