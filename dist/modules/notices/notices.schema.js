import z from "zod";
export const CreateNoticeSchema = z.object({
    employeeId: z.string(),
    type: z.enum(["importante", "informativo", "nenhum"]).default("nenhum").optional(),
    content: z.string().min(1, "Conteúdo do aviso é obrigatório"),
});
export const UpdateNoticeSchema = z.object({
    id: z.cuid2(),
    type: z.enum(["importante", "informativo", "nenhum"]).optional(),
    content: z.string().min(1).optional()
});
export const GetNoticeSchema = z.object({
    id: z.string()
});
