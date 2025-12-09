import { prisma } from "../../lib/prisma";
export class AuthRepository {
    findEmployee(cpf) {
        return prisma.employee.findUnique({
            where: { cpf },
        });
    }
}
