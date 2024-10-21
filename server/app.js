import express from "express";
import cors from "cors";
import userRoutes from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/product", userRoutes);

export { app };
