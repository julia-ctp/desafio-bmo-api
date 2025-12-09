import { AuthSchema } from "./auth.schema";
import { AuthService } from "./auth.service";
export class AuthController {
    service = new AuthService();
    async login(req, res, next) {
        try {
            const data = AuthSchema.parse(req.body);
            const response = await this.service.login(data);
            return res
                .status(200)
                .json({ message: "Login feito com sucesso!", response });
        }
        catch (error) {
            next(error);
        }
    }
}
