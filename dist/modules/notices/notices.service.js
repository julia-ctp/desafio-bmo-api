import { NoticesRepository } from "./notices.repository";
export class NoticesService {
    repo = new NoticesRepository();
    async create(data) {
        return this.repo.createNotice(data);
    }
    async getAll() {
        return this.repo.getAllNotices();
    }
    async getById(id) {
        const notice = await this.repo.getNoticeById(id);
        if (!notice) {
            const error = new Error("Registro não encontrado");
            error.status = 404;
            throw error;
        }
        return notice;
    }
    async update(data) {
        return await this.repo.updateNotice(data);
    }
    async delete(id) {
        await this.repo.deleteNotice(id);
    }
}
