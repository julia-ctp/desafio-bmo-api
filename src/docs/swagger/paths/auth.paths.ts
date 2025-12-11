export default {
  "/login": {
    post: {
      tags: ["Auth"],
      summary: "Realizar login",
      description: "Autentica um usuário e retorna um token JWT",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/LoginInput" },
          },
        },
      },
      responses: {
        200: {
          description: "Login realizado com sucesso",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/AuthToken" },
            },
          },
        },
        400: {
          description: "Cpf ou senha inválidos",
        },
        401: {
          description: "Credenciais inválidas",
        },
      },
    },
  },
};
