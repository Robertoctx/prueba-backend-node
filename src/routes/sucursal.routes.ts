import { Router } from "express";

import {
    getAllSucursales,
    putSucursal,
} from "../controllers/sucursal.controller";

const routes = Router();

routes.get("", getAllSucursales);
routes.put("/:codigoSucursal", putSucursal);

export default routes;
