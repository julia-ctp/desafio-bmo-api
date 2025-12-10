import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import noticeSchemas from "./schemas/notice.schemas";
import noticesPaths from "./paths/notices.paths";
import contactSchemas from "./schemas/contact.schemas";
import contactPaths from "./paths/contact.paths";

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
  },
  components: {
    schemas: {
      ...noticeSchemas,
      ...contactSchemas,
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

export function setupSwagger(app: Express) {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}
