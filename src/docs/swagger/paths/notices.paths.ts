export default {
  "/notices": {
    get: {
      tags: ["Notices"],
      summary: "Listar todos os avisos",
      description: "Retorna uma lista de todos os avisos cadastrados",
      security: [{ bearerAuth: [] }],
      responses: {
        200: {
          description: "Lista de avisos obtida com sucesso",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Notice" },
              },
            },
          },
        },
        401: {
          description: "Não autorizado",
        },
      },
    },

    post: {
      tags: ["Notices"],
      summary: "Criar novo aviso",
      description: "Cria um novo aviso no sistema",
      security: [{ bearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/CreateNoticeInput" },
          },
        },
      },
      responses: {
        201: {
          description: "Aviso criado com sucesso",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Notice" },
            },
          },
        },
        400: {
          description: "Dados inválidos",
        },
        401: {
          description: "Não autorizado",
        },
      },
    },
  },

  "/notices/{id}": {
    get: {
      tags: ["Notices"],
      summary: "Obter aviso por ID",
      description: "Retorna os detalhes de um aviso específico",
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "string", format: "uuid" },
          description: "ID do aviso",
        },
      ],
      responses: {
        200: {
          description: "Aviso obtido com sucesso",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Notice" },
            },
          },
        },
        401: {
          description: "Não autorizado",
        },
        404: {
          description: "Aviso não encontrado",
        },
      },
    },

    put: {
      tags: ["Notices"],
      summary: "Atualizar aviso",
      description: "Atualiza um aviso existente",
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "string", format: "uuid" },
          description: "ID do aviso",
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/UpdateNoticeInput" },
          },
        },
      },
      responses: {
        200: {
          description: "Aviso atualizado com sucesso",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Notice" },
            },
          },
        },
        400: {
          description: "Dados inválidos",
        },
        401: {
          description: "Não autorizado",
        },
        404: {
          description: "Aviso não encontrado",
        },
      },
    },

    delete: {
      tags: ["Notices"],
      summary: "Deletar aviso",
      description: "Remove um aviso do sistema",
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "string", format: "uuid" },
          description: "ID do aviso",
        },
      ],
      responses: {
        204: {
          description: "Aviso deletado com sucesso",
        },
        401: {
          description: "Não autorizado",
        },
        404: {
          description: "Aviso não encontrado",
        },
      },
    },
  },
};
