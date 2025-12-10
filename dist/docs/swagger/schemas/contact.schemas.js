const contactMainSchemas = {
    Contact: {
        type: "object",
        properties: {
            id: { type: "string" },
            name: { type: "string" },
            email: { type: "string", format: "email" },
            phone: { type: "string" },
            message: { type: "string" },
            createdAt: { type: "string", format: "date-time" }
        },
    },
    CreateContactInput: {
        type: "object",
        required: ["name", "email", "phone", "message"],
        properties: {
            name: {
                type: "string",
                description: "Nome",
                minLength: 1,
            },
            email: {
                type: "string",
                format: "email",
                description: "E-mail",
            },
            phone: {
                type: "string",
                description: "Telefone",
                minLength: 10,
                maxLength: 11,
                pattern: "^\\d+$",
            },
            message: {
                type: "string",
                description: "Mensagem",
                minLength: 1,
            },
        },
    },
};
export default contactMainSchemas;
