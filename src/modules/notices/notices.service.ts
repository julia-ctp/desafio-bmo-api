import { NoticeType } from "@/src/generated/prisma/enums";
import { NoticesRepository } from "./notices.repository";

export class NoticesService {
  private repo = new NoticesRepository();

  async create(data: {
    employeeId: string;
    type: NoticeType;
    content: string;
  }) {
    return this.repo.createNotice(data);
  }

  async getAll() {
    return this.repo.getAllNotices();
  }

  async getById(id: string) {
    const notice = await this.repo.getNoticeById(id);

    if (!notice) {
      throw new Error("Aviso não encontrado.");
    }

    return notice;
  }

  async update(id: string, data: { type: NoticeType, content: string }) {
    const targetNotice = await this.repo.getNoticeById(id);

    if (!targetNotice) {
      throw new Error("Aviso não encontrado");
    }

    return await this.repo.updateNotice(id, data)
  }

  async delete(id: string) {
    const targetNotice = await this.repo.getNoticeById(id);

    if (!targetNotice) {
      throw new Error("Aviso não encontrado");
    }

    await this.repo.deleteNotice(id);
  }
}
