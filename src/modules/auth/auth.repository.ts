import { prisma } from "../../lib/prisma";

export class AuthRepository {
  findEmployee(cpf: string) {
    return prisma.employee.findUnique({
      where: { cpf },
    });
  }
}
