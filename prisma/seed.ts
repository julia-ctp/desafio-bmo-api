import { prisma } from "../src/lib/prisma";
import bcrypt from "bcrypt";

async function seed() {
  const password = "teste123";
  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.employee.create({
    data: {
      id: "cmiz0da2o000104joasxzb8tk",
      name: "Usuário",
      lastName: "Teste",
      cpf: "99999999999",
      password: hashedPassword,
    },
  });
}

seed().then(() => prisma.$disconnect());
