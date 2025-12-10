export default {
    "/contact": {
        post: {
            tags: ["Contact"],
            description: "Cria um novo contato",
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: { $ref: "#/components/schemas/CreateContactInput" },
                    },
                },
            },
            responses: {
                200: {
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
