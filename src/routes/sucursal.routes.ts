import { Router } from "express";

import {
    getAllSucursales,
    postSucursal,
    putSucursal,
} from "../controllers/sucursal.controller";

const routes = Router();

routes.get("", getAllSucursales);
routes.post("", postSucursal);
routes.put("/:codigoSucursal", putSucursal);

export default routes;
