import { AppError } from "@/errors/appError";
import { AuthRepository } from "./auth.repository";
import bcrypt from "bcrypt";
import { generateToken } from "@/utils/jwt.utils";
export class AuthService {
    repo = new AuthRepository();
    async login({ cpf, password }) {
        const employee = await this.repo.findEmployee(cpf);
        if (!employee)
            throw new AppError("CPF inválido", 404);
        const isValid = await bcrypt.compare(password, employee.password);
        console.log("isValid: ", isValid);
        if (!isValid)
            throw new AppError("Senha incorreta", 401);
        const payload = {
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
