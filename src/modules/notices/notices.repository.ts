import { prisma } from "../../lib/prisma";
import { CreateNoticeInput, UpdateNoticeInput } from "./notices.schema";

export class NoticesRepository {
  createNotice(data: CreateNoticeInput) {
    return prisma.notice.create({ data });
  }

  getAllNotices() {
    return prisma.notice.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        employee: {
          select: {
            id: true,
            name: true,
            lastName: true,
          },
        },
      },
    });
  }

  getNoticeById(id: string) {
    return prisma.notice.findUnique({
      where: { id },
      include: {
        employee: {
          select: {
            id: true,
            name: true,
            lastName: true,
          },
        },
      },
    });
  }

  updateNotice(data: UpdateNoticeInput) {
    return prisma.notice.update({
      where: { id: data.id },
      data,
    });
  }

  deleteNotice(id: string) {
    return prisma.notice.delete({
      where: { id },
    });
  }
}
