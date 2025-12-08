import { prisma } from "../src/lib/prisma";

async function seed() {
  await prisma.employee.create({
    data: {
      id: "cmiwatmsr000004kwe4jlan13",
      name: "Usuário",
      lastName: "Teste",
      cpf: "00000000000",
      password: "teste123"
    },
  });
}

seed().then(() => prisma.$disconnect());