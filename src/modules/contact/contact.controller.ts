import { NextFunction, Request, Response } from "express";
import { ContactService } from "./contact.service";
import { contactSchema } from "./contact.schema";

export class ContactController {
  private service = new ContactService();

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const data = contactSchema.parse(req.body);
      const contact = await this.service.create(data);

      return res.status(200).json(contact);
    } catch (error: any) {
      next(error);
    }
  }
}
