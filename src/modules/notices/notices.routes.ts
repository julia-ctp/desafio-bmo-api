import { Router, Request, Response, NextFunction } from "express";
import { NoticesController } from "./notices.controller";
import { currentEmployee } from "@/src/middlewares/currentEmployee";

export const noticesRouter = Router();
const controller = new NoticesController();

noticesRouter.post("/notices", currentEmployee, (req: Request, res: Response) =>
  controller.create(req, res)
);

noticesRouter.get("/notices", (req: Request, res: Response) =>
  controller.getAll(req, res)
);

noticesRouter.get(
  "/notices/:id",
  (req: Request, res: Response, next: NextFunction) =>
    controller.getById(req, res, next)
);

noticesRouter.put(
  "/notices/:id",
  (req: Request, res: Response, next: NextFunction) =>
    controller.update(req, res, next)
);

noticesRouter.delete(
  "/notices/:id",
  (req: Request, res: Response, next: NextFunction) =>
    controller.delete(req, res, next)
);
