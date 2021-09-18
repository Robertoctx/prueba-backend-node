import { Router } from "express";

import { notFound } from "../controllers/medico.controller";
import { getMedicos, postMedico } from "../controllers/medico.controller";
import {
    validatorGetBodyMedico,
    validatorPostBodyMedico,
} from "../middleware/validatorMedico";

const routes = Router();

routes.get("", validatorGetBodyMedico, getMedicos);
routes.post("", validatorPostBodyMedico, postMedico);
routes.all("/*", notFound);

export default routes;
