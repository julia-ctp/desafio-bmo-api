import { AuthRepository } from "./auth.repository";
import { AuthInput } from "./auth.schema";
import bcrypt from "bcrypt";
import { generateToken, LoginPayload } from "@/src/utils/jwt.utils";
import { AppError } from "@/src/errors/appError";

export class AuthService {
  private repo = new AuthRepository();

  async login({ cpf, password }: AuthInput) {
    const employee = await this.repo.findEmployee(cpf);
    if (!employee) throw new AppError("CPF inválido", 404);

    const isValid = await bcrypt.compare(password, employee.password);
    console.log("isValid: ", isValid);
    if (!isValid) throw new AppError("Senha incorreta", 401);

    const payload: LoginPayload = {
      id: employee.id,
      name: employee.name,
      lastName: employee.lastName,
    };
    const token = generateToken(payload);

    return {
      token,
      employee: payload,
    };
  }
}
