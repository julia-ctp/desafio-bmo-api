import { Router, Response, NextFunction } from "express";
import { NoticesController } from "./notices.controller";
import {
  authMiddleware,
  RequestWithEmployee,
} from "@/src/middlewares/auth.middleware";

export const noticesRouter = Router();
const controller = new NoticesController();

noticesRouter.post(
  "/notices",
  authMiddleware,
  (req: RequestWithEmployee, res: Response, next: NextFunction) =>
    controller.create(req, res, next)
);

noticesRouter.get(
  "/notices",
  authMiddleware,
  (req: RequestWithEmployee, res: Response) =>
    controller.getAll(req, res)
);

noticesRouter.get(
  "/notices/:id",
  authMiddleware,
  (req: RequestWithEmployee, res: Response, next: NextFunction) =>
    controller.getById(req, res, next)
);

noticesRouter.put(
  "/notices/:id",
  authMiddleware, (req: RequestWithEmployee, res: Response, next: NextFunction) =>
    controller.update(req, res, next)
);

noticesRouter.delete(
  "/notices/:id",
  authMiddleware, (req: RequestWithEmployee, res: Response, next: NextFunction) =>
    controller.delete(req, res, next)
);
