import { NextFunction, Request, Response } from "express";
import { NoticesService } from "./notices.service";
import {
  CreateNoticeSchema,
  GetNoticeSchema,
  UpdateNoticeSchema,
} from "./notices.schema";

export class NoticesController {
  private service = new NoticesService();

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const employeeId = req.employeeId as string;
      console.log(employeeId)
      const data = CreateNoticeSchema.parse({ ...req.body, employeeId });
      const newNotice = await this.service.create(data);
      res.status(201).json({ message: "Aviso criado com sucesso!", newNotice });
    } catch (error) {
      next(error);
    }
  }

  async getAll(_req: Request, res: Response) {
    const notices = await this.service.getAll();
    return res.status(200).json(notices);
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const data = GetNoticeSchema.parse(req.params);
      const notice = await this.service.getById(data.id);
      return res.status(200).json(notice);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const data = UpdateNoticeSchema.parse({ ...req.body, ...req.params });
      const updatedNotice = await this.service.update(data);
      return res
        .status(200)
        .json({ message: "Aviso atualizado com sucesso!", ...updatedNotice });
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const notice = GetNoticeSchema.parse(req.params);
      await this.service.delete(notice.id);
      return res.status(200).json({ message: "Aviso deletado com sucesso!" });
    } catch (error) {
      next(error);
    }
  }
}
