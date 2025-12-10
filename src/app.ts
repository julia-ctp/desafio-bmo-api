import express from "express";
import cors from "cors";
import { noticesRouter } from "./modules/notices/notices.routes";
import { errorHandler } from "./middlewares/errorHandler.middleware";
import { setupSwagger } from "./docs/swagger/swagger";
import { contactRouter } from "./modules/contact/contact.route";
import { authRouter } from "./modules/auth/auth.routes";

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(authRouter);
app.use(noticesRouter);
app.use(contactRouter);
setupSwagger(app);
app.use(errorHandler);

export default app;
