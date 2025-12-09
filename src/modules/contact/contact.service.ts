import { ContactRepository } from "./contact.repository";
import { ContactInput } from "./contact.schema";

export class ContactService {
  private repo = new ContactRepository();
  async create(data: ContactInput) {
    return await this.repo.createContact(data);
  }
}
