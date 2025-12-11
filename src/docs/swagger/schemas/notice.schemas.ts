const noticeEnumSchema = {
  NoticeType: {
    type: "string",
    enum: ["importante", "informativo", "nenhum"],
  },
};

const noticeMainSchemas = {
  Notice: {
    type: "object",
    properties: {
      id: {
        type: "string",
        format: "uuid",
        description: "Identificador único do aviso",
        example: "550e8400-e29b-41d4-a716-446655440000",
      },
      title: {
        type: "string",
        description: "Título do aviso",
        example: "Aviso de Manutenção do Sistema",
      },
      description: {
        type: "string",
        description: "Descrição detalhada do aviso",
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
      title: {
        type: "string",
        description: "Título do aviso",
        example: "Aviso de Manutenção do Sistema",
      },
      description: {
        type: "string",
        description: "Descrição detalhada do aviso",
        example:
          "O sistema estará em manutenção no próximo domingo das 22h às 06h",
      },
    },
  },

  UpdateNoticeInput: {
    type: "object",
    properties: {
      title: {
        type: "string",
        description: "Título do aviso",
        example: "Aviso de Manutenção do Sistema",
      },
      description: {
        type: "string",
        description: "Descrição detalhada do aviso",
        example:
          "O sistema estará em manutenção no próximo domingo das 22h às 06h",
      },
    },
  },
};

export default {
  ...noticeEnumSchema,
  ...noticeMainSchemas,
};
