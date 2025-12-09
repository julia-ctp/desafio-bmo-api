import { ContactService } from "./contact.service";
import { contactSchema } from "./contact.schema";
export class ContactController {
    service = new ContactService();
    async create(req, res, next) {
        try {
            const data = contactSchema.parse(req.body);
            const contact = await this.service.create(data);
            return res.status(200).json(contact);
        }
        catch (error) {
            next(error);
        }
    }
}
