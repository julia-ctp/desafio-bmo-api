import swaggerUi from "swagger-ui-express";
import noticeSchemas from "./schemas/notice.schemas";
import noticesPaths from "./paths/notices.paths";
import contactSchemas from "./schemas/contact.schemas";
import contactPaths from "./paths/contact.paths";
import authSchemas from "./schemas/auth.schemas";
import authPaths from "./paths/auth.paths";
const swaggerDocument = {
    openapi: "3.0.0",
    info: {
        title: "Desafio BMO",
        version: "1.0.0",
        description: "API de Avisos Internos",
    },
    servers: [{ url: "http://localhost:3000", description: "Servidor Local" }],
    paths: {
        ...noticesPaths,
        ...contactPaths,
        ...authPaths,
    },
    components: {
        schemas: {
            ...noticeSchemas,
            ...contactSchemas,
            ...authSchemas,
        },
    },
    securitySchemes: {
        bearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
        },
    },
    security: [{ bearerAuth: [] }],
};
export function setupSwagger(app) {
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}
