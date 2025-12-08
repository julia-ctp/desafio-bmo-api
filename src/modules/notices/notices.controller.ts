import { NextFunction, Request, Response } from "express";
import { NoticesService } from "./notices.service";

export class NoticesController {
  private service = new NoticesService();

  async create(req: Request, res: Response) {
    const employeeId = req.employeeId;
    const { type, content } = req.body;

    const notice = await this.service.create({
      employeeId,
      type,
      content,
    });

    return res.status(201).json({
      message: "Aviso criado com sucesso!",
      notice,
    });
  }

  async getAll(req: Request, res: Response) {
    const notices = await this.service.getAll();

    return res.status(200).json(notices);
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    try {
      const notice = await this.service.getById(id);

      return res.status(200).json(notice);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const { type, content } = req.body;

    try {
      const updatedNotice = await this.service.update(id, { type, content });
      return res.status(200).json(updatedNotice);
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    try {
      await this.service.delete(id);
      return res.status(200).json({ message: "Aviso deletado com sucesso!" });
    } catch (error) {
      next(error);
    }
  }
}
