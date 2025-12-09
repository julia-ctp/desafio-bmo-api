import express from "express";
import { noticesRouter } from "./modules/notices/notices.routes";
import { errorHandler } from "./middlewares/errorHandler";
import { setupSwagger } from "./docs/swagger/swagger";
import { contactRouter } from "./modules/contact/contact.route";

const app = express();
app.use(express.json());

app.use(noticesRouter);
app.use(contactRouter)
setupSwagger(app)
app.use(errorHandler);

export default app;
