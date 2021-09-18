import { Router } from "express";

import { notFound } from "../controllers/medico.controller";
import {
    validatorPostBodySucursal,
    validatorPutBodySucursal,
} from "../middleware/validatorSucursal";

import {
    getAllSucursales,
    postSucursal,
    putSucursal,
} from "../controllers/sucursal.controller";

const routes = Router();

routes.get("", getAllSucursales);
routes.post("", validatorPostBodySucursal, postSucursal);
routes.put("/:codigoSucursal", validatorPutBodySucursal, putSucursal);
routes.all("/*", notFound);

export default routes;
