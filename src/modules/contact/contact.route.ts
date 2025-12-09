import { Router, Request, Response, NextFunction } from "express";
import { ContactController } from "./contact.controller";

export const contactRouter = Router();
const controller = new ContactController();

contactRouter.post("/contact", (req: Request, res: Response, next: NextFunction) =>
  controller.create(req, res, next)
);
