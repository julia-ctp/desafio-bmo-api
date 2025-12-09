export default {
    "/notices": {
        get: {
            tags: ["Notices"],
            summary: "Lista todos os avisos",
            responses: {
                200: {
                    description: "Lista de avisos",
                    content: {
                        "application/json": {
                            schema: {
                                type: "array",
                                items: { $ref: "#/components/schemas/Notice" },
                            },
                        },
                    },
                },
            },
        },
        post: {
            tags: ["Notices"],
            summary: "Cria um novo aviso",
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
                },
            },
        },
    },
    "/notices/{id}": {
        get: {
            tags: ["Notices"],
            summary: "Busca um aviso por ID",
            parameters: [
                {
                    name: "id",
                    in: "path",
                    required: true,
                    schema: { type: "string" },
                },
            ],
            responses: {
                200: {
                    description: "Aviso encontrado",
                },
                404: { description: "Aviso não encontrado" },
            },
        },
        put: {
            tags: ["Notices"],
            summary: "Atualiza um aviso",
            parameters: [
                {
                    name: "id",
                    in: "path",
                    required: true,
                    schema: { type: "string" },
                },
            ],
            requestBody: {
                required: false,
                content: {
                    "application/json": {
                        schema: { $ref: "#/components/schemas/UpdateNoticeInput" },
                    },
                },
            },
            responses: {
                200: { description: "Aviso atualizado com sucesso" },
                404: { description: "Aviso não encontrado" },
            },
        },
        delete: {
            tags: ["Notices"],
            summary: "Deleta um aviso",
            parameters: [
                {
                    name: "id",
                    in: "path",
                    required: true,
                    schema: { type: "string" },
                },
            ],
            responses: {
                200: { description: "Aviso deletado com sucesso" },
                404: { description: "Aviso não encontrado" },
            },
        },
    },
};
