import express from "express";
import cors from "cors";
import morgan from "morgan";
import { createConnection } from "typeorm";

const app = express();
createConnection();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.listen(3000);
console.log("Server on port: ", 3000);
