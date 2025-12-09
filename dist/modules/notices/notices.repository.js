import { prisma } from "../../lib/prisma";
export class NoticesRepository {
    createNotice(data) {
        return prisma.notice.create({ data });
    }
    getAllNotices() {
        return prisma.notice.findMany({
            orderBy: { createdAt: "desc" },
            include: { employee: true },
        });
    }
    getNoticeById(id) {
        return prisma.notice.findUnique({
            where: { id },
            include: { employee: true },
        });
    }
    updateNotice(data) {
        return prisma.notice.update({
            where: { id: data.id },
            data,
        });
    }
    deleteNotice(id) {
        return prisma.notice.delete({
            where: { id },
        });
    }
}
