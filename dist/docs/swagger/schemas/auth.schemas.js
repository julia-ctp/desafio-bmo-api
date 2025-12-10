const authMainSchemas = {
    LoginInput: {
        type: "object",
        required: ["cpf", "password"],
        properties: {
            cpf: {
                type: "string",
                format: "cpf",
                example: "999.999.999-99",
                description: "cpf do usuário",
            },
            password: {
                type: "string",
                format: "password",
                example: "senha123",
                description: "Senha do usuário",
            },
        },
    },
    AuthToken: {
        type: "object",
        properties: {
            token: {
                type: "string",
                example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
                description: "Token JWT de autenticação",
            },
        },
    },
};
export default authMainSchemas;
