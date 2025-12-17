import { AppError } from "@/src/errors/appError";
import { NoticesRepository } from "./notices.repository";
import { CreateNoticeInput, UpdateNoticeInput } from "./notices.schema";

export class NoticesService {
  private repo = new NoticesRepository();

  async create(data: CreateNoticeInput) {
    return this.repo.createNotice(data);
  }

  async getAll() {
    return this.repo.getAllNotices();
  }

  async getById(id: string ) {
    const notice = await this.repo.getNoticeById(id);

    if (!notice) {
    const error = new AppError("Registro não encontrado", 404);
    throw error;
  }

    return notice;
  }

  async update(data: UpdateNoticeInput) {
    return await this.repo.updateNotice(data);
  }

  async delete(id: string) {
    await this.repo.deleteNotice(id);
  }
}
