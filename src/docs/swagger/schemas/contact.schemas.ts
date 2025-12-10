const contactMainSchemas = {
  Contact: {
    type: "object",
    properties: {
      id: { type: "string" },
      name: { type: "string" },
      email: { type: "string", format: "email" },
      phone: { type: "string" },
      message: { type: "string" },
      createdAt: { type: "string", format: "date-time" },
      updatedAt: { type: "string", format: "date-time" },
    },
  },

  CreateContactInput: {
    type: "object",
    required: ["name", "email", "phone", "message"],
    properties: {
      name: {
        type: "string",
        description: "Nome do contato",
        minLength: 1,
      },
      email: {
        type: "string",
        format: "email",
        description: "E-mail do contato",
      },
      phone: {
        type: "string",
        description: "Telefone do contato (10 a 11 dígitos)",
        minLength: 10,
        maxLength: 11,
        pattern: "^\\d+$",
      },
      message: {
        type: "string",
        description: "Mensagem do contato",
        minLength: 1,
      },
    },
  },
};

export default contactMainSchemas;
