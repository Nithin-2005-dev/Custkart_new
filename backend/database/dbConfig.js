import mongoose from "mongoose";
import chalk from "chalk";
export const connectToDb = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URL);
    if (!db) {
      throw new Error("database connection failed!");
    } else {
      console.log(
        chalk.yellowBright.bold(
          `database connection successfull with connection id ${db.connection.id}`
        )
      );
    }
  } catch (err) {
    if (err.response) {
      throw new Error(`Error response:${err.response}`);
    } else if (err.request) {
      throw new Error(`Error response:${err.request}`);
    } else {
      throw new Error(`Error response:${err}`);
    }
  }
};
