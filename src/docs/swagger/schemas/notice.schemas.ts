const contactMainSchemas =  {
  Notice: {
    type: "object",
    properties: {
      id: {
        type: "string",
        format: "cuid",
        description: "Identificador único do aviso",
        example: "cmjafv2xc0003fvijv6nbdpdg",
      },
      employeeId: {
        type: "string",
        format: "cuid",
        description: "ID do funcionário que postou o aviso",
        example: "cmiz0da2o000104joasxzb8tk",
      },
      type: {
        type: { enum: ["importante", "informativo", "nenhum"] },
        description: "Tipo do aviso",
        example: "importante",
      },
      content: {
        type: "string",
        description: "Conteúdo do aviso",
        example:
          "O sistema estará em manutenção no próximo domingo das 22h às 06h",
      },
      createdAt: {
        type: "string",
        format: "date-time",
        description: "Data e hora de criação do aviso",
        example: "2025-12-11T10:30:00Z",
      },
      updatedAt: {
        type: "string",
        format: "date-time",
        description: "Data e hora da última atualização do aviso",
        example: "2025-12-11T14:45:00Z",
      },
    },
  },

  CreateNoticeInput: {
    type: "object",
    required: ["title", "description"],
    properties: {
      type: {
        type: { enum: ["importante", "informativo", "nenhum"] },
        description: "Tipo do aviso",
        example: "importante",
      },
      content: {
        type: "string",
        description: "Conteúdo do aviso",
        example:
          "O sistema estará em manutenção no próximo domingo das 22h às 06h",
      },
    },
  },

  UpdateNoticeInput: {
    type: "object",
    properties: {
      type: {
        type: { enum: ["importante", "informativo", "nenhum"] },
        description: "Tipo do aviso",
        example: "importante",
      },
      content: {
        type: "string",
        description: "Conteúdo do aviso",
        example:
          "O sistema estará em manutenção no próximo domingo das 22h às 06h",
      },
    },
  },
};

export default contactMainSchemas;
