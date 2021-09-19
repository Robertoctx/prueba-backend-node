import { body, param, query } from "express-validator";

import { validatorMap } from "../helpers/validatorMap";

export const validatorPostBodySucursal: any = [
    body("codigoEmpresa", "El codigoEmpresa es obligatorio").not().isEmpty(),
    body("nombreSucursal", "El nombreSucursal es obligatorio").not().isEmpty(),
    body("region", "El region es obligatorio").not().isEmpty(),
    validatorMap,
];

export const validatorPutBodySucursal: any = [
    param("codigoSucursal", "El codigoSucursal es obligatorio").not().isEmpty(),
    query("codigoEmpresa", "El codigoEmpresa es obligatorio").not().isEmpty(),
    body("nombreSucursal", "El nombreSucursal es obligatorio").not().isEmpty(),
    //body("region", "El region es obligatorio").not().isEmpty(),
    validatorMap,
];
