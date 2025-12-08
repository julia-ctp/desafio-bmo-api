import express from "express";
import { noticesRouter } from "./modules/notices/notices.routes";
import { errorHandler } from "./middlewares/errorHandler";
import { setupSwagger } from "./docs/swagger/swagger";

const app = express();
app.use(express.json());

setupSwagger(app)
app.use(noticesRouter);
app.use(errorHandler);

export default app;
