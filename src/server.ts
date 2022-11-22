import express from "express";
import dotenv from "dotenv";
import { router } from "./routes";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(router);

app.listen(PORT, () => {
  console.log(
    `Server is running on the port ${PORT}\nhttp://localhost:3000\nCONTROL+C stop to it`
  );
});
