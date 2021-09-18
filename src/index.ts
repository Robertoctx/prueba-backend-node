import express from "express";
import cors from "cors";
import morgan from "morgan";
import { createConnection } from "typeorm";
import "reflect-metadata";

import sucursalRoutes from "./routes/sucursal.routes";

const app = express();
createConnection();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/sucursales", sucursalRoutes);

app.listen(3000);
console.log("Server on port: ", 3000);
