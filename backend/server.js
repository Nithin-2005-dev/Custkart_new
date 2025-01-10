import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectToDb } from "./database/dbConfig.js";
import chalk from "chalk"
dotenv.config();
const server = express();
//datebase
connectToDb();
//middlewares
server.use(express.json());
server.use(cors());
//routes
server.listen(process.env.PORT, (port) => {
  console.log(chalk.blue.bold(`Server is listening on port ${process.env.PORT}`));
});
