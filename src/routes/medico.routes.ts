import { Router } from "express";
import { getMedicos } from "../controllers/medico.controller";

const routes = Router();

routes.get("", getMedicos);

export default routes;
