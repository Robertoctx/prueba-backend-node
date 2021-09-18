import { check } from "express-validator";

import { validatorMap } from "../helpers/validatorMap";

export const validatorPostBodySucursal: any = [
    check("codigoEmpresa", "El codigoEmpresa es obligatorio").not().isEmpty(),
    check("nombreSucursal", "El nombreSucursal es obligatorio").not().isEmpty(),
    check("region", "El region es obligatorio").not().isEmpty(),
    validatorMap,
];

export const validatorPutBodySucursal: any = [
    check("nombreSucursal", "El nombreSucursal es obligatorio").not().isEmpty(),
    check("region", "El region es obligatorio").not().isEmpty(),
    validatorMap,
];
