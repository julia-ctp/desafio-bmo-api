import { NoticeType } from "@/src/generated/prisma/enums";
import { prisma } from "../../lib/prisma";

export class NoticesRepository {
  createNotice(data: {
    employeeId: string;
    type: NoticeType;
    content: string;
  }) {
    return prisma.notice.create({ data });
  }

  getAllNotices() {
    return prisma.notice.findMany({
      orderBy: { createdAt: "desc" },
      include: { employee: true },
    });
  }

  getNoticeById(id: string) {
    return prisma.notice.findUnique({
      where: { id },
      include: { employee: true },
    });
  }

  updateNotice(id: string, data: { type: NoticeType; content: string }) {
    return prisma.notice.update({
      where: { id },
      data,
    });
  }

  deleteNotice(id: string) {
    return prisma.notice.delete({
      where: { id },
    });
  }
}
