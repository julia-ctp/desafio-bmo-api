import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./docs/swagger/swagger.json";
import { noticesRouter } from "./modules/notices/notices.routes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();
app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(noticesRouter);
app.use(errorHandler);

export default app;
