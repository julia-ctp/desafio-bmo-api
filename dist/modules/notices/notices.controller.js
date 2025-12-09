import { NoticesService } from "./notices.service";
import { CreateNoticeSchema, GetNoticeSchema, UpdateNoticeSchema, } from "./notices.schema";
export class NoticesController {
    service = new NoticesService();
    async create(req, res, next) {
        try {
            const employeeId = req.employeeId?.id;
            if (!employeeId)
                throw new Error("Funcionário não autenticado");
            const data = CreateNoticeSchema.parse({ ...req.body, employeeId });
            const newNotice = await this.service.create(data);
            res.status(201).json({ message: "Aviso criado com sucesso!", newNotice });
        }
        catch (error) {
            next(error);
        }
    }
    async getAll(_req, res) {
        const notices = await this.service.getAll();
        return res.status(200).json(notices);
    }
    async getById(req, res, next) {
        try {
            const data = GetNoticeSchema.parse(req.params);
            const notice = await this.service.getById(data.id);
            return res.status(200).json(notice);
        }
        catch (error) {
            next(error);
        }
    }
    async update(req, res, next) {
        try {
            const data = UpdateNoticeSchema.parse({ ...req.body, ...req.params });
            const updatedNotice = await this.service.update(data);
            return res
                .status(200)
                .json({ message: "Aviso atualizado com sucesso!", ...updatedNotice });
        }
        catch (error) {
            next(error);
        }
    }
    async delete(req, res, next) {
        try {
            const notice = GetNoticeSchema.parse(req.params);
            await this.service.delete(notice.id);
            return res.status(200).json({ message: "Aviso deletado com sucesso!" });
        }
        catch (error) {
            next(error);
        }
    }
}
