import { z } from 'zod';
import { email } from 'zod/v4-mini';

export const loginSchema = z.object({
    email: z.string().min(1, "O e-mail é obrigatório").email("E-mail inválido"),
    password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres"),
})

export type LoginSchema = z.infer<typeof loginSchema>;