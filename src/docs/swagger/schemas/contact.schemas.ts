const contactMainSchemas = {
  Contact: {
    type: "object",
    properties: {
      id: {
        type: "string",
        format: "cuid",
        description: "Identificador único do contato",
        example: "cmiz0da2o000104joasxzb8tk",
      },
      name: {
        type: "string",
        description: "Nome completo do contato",
        example: "João Silva",
      },
      email: {
        type: "string",
        format: "email",
        description: "Endereço de email do contato",
        example: "joao@example.com",
      },
      phone: {
        type: "string",
        description: "Número de telefone do contato",
        example: "11999999999",
      },
      message: {
        type: "string",
        description: "Mensagem de contato enviada",
        example: "Gostaria de mais informações sobre seus serviços",
      },
      createdAt: {
        type: "string",
        format: "date-time",
        description: "Data e hora de criação do contato",
        example: "2025-12-11T10:30:00Z",
      },
    },
  },

  CreateContactInput: {
    type: "object",
    required: ["name", "email", "phone", "message"],
    properties: {
      name: {
        type: "string",
        description: "Nome completo do contato",
        minLength: 1,
        example: "João Silva",
      },
      email: {
        type: "string",
        format: "email",
        description: "Endereço de email do contato",
        example: "joao@example.com",
      },
      phone: {
        type: "string",
        description: "Número de telefone do contato (10 a 11 dígitos)",
        minLength: 10,
        maxLength: 11,
        example: "11999999999",
      },
      message: {
        type: "string",
        description: "Mensagem de contato a ser enviada",
        minLength: 1,
        example: "Gostaria de mais informações sobre seus serviços",
      },
    },
  },
};

export default contactMainSchemas;
