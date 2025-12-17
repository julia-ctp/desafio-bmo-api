import { z } from "zod";

export const AuthSchema = z.object({
  cpf: z
    .string()
    .length(11, "CPF deve ter 11 digitos")
    .regex(/^\d+$/, "CPF deve conter apenas números"),
  password: z.string().min(1, "Senha é obrigatória"),
});

export type AuthInput = z.infer<typeof AuthSchema>