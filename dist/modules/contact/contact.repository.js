import { prisma } from "../../lib/prisma";
export class ContactRepository {
    createContact(data) {
        return prisma.contact.create({ data });
    }
}
