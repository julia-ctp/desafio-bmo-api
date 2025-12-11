export default {
  "/contact": {
    post: {
      tags: ["Contact"],
      summary: "Enviar novo contato",
      description: "Enviar um novo contato no sistema",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/CreateContactInput" },
          },
        },
      },
      responses: {
        201: {
          description: "Contato enviado com sucesso",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Contact" },
            },
          },
        },
        400: {
          description: "Dados inválidos",
        },
      },
    },
  },
};
