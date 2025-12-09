import { ContactRepository } from "./contact.repository";
export class ContactService {
    repo = new ContactRepository();
    async create(data) {
        return await this.repo.createContact(data);
    }
}
