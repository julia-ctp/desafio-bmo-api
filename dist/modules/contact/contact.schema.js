import { z } from "zod";
export const contactSchema = z.object({
    name: z.string().min(1, "Nome obrigatório"),
    email: z.email("E-mail inválido"),
    phone: z
        .string()
        .regex(/^\d+$/, "Telefone deve conter apenas números")
        .min(10, "Telefone deve ter pelo menos 10 dígitos")
        .max(11, "Telefone deve ter no máximo 11 dígitos"),
    message: z.string().min(1, "Mensagem é obrigatória"),
});
