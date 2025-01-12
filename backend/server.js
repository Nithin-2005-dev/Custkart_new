import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectToDb } from "./database/dbConfig.js";
import chalk from "chalk";
import { userRouter } from "./routes/user.routes.js";
import { authRouter } from "./routes/auth.routes.js";
import { orderRouter } from "./routes/order.routes.js";
import { productRouter } from "./routes/product.routes.js";
dotenv.config();
const server = express();
//datebase
connectToDb();
//middlewares
server.use(express.json());
server.use(cors());
//routes
server.use("/api/user", userRouter);
server.use("/api/auth", authRouter);
server.use("/api/order", orderRouter);
server.use("/api/product", productRouter);
server.listen(process.env.PORT, (port) => {
  console.log(
    chalk.blue.bold(`Server is listening on port ${process.env.PORT}`)
  );
});
