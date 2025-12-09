import { prisma } from "../../lib/prisma";
import { ContactInput } from "./contact.schema";

export class ContactRepository {
  createContact(data: ContactInput) {
    return prisma.contact.create({ data });
  }
}
