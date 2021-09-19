import { body, query } from "express-validator";

import { validatorMap } from "../helpers/validatorMap";

export const validatorPostBodyMedico: any = [
    body("tipoIdentificacion", "El tipoIdentificacion es obligatorio")
        .not()
        .isEmpty(),
    body("numeroIdentificacion", "El numeroIdentificacion es obligatorio")
        .not()
        .isEmpty(),
    body("primerNombre", "El primerNombre es obligatorio").not().isEmpty(),
    body("primerApellido", "El primerApellido es obligatorio").not().isEmpty(),
    body("segundoApellido", "El segundoApellido es obligatorio")
        .not()
        .isEmpty(),
    body("mail", "El mail es obligatorio y con formato email")
        .not()
        .isEmpty()
        .isEmail(),
    body("sueldo", "El sueldo es obligatorio").not().isEmpty(),
    body("sexo", "El sexo es obligatorio").not().isEmpty(),
    body("codigoSucursal", "El codigoSucursal es obligatorio").not().isEmpty(),
    body("codigoEmpresa", "El codigoEmpresa es obligatorio").not().isEmpty(),
    validatorMap,
];

export const validatorGetBodyMedico: any = [
    query("codigoEmpresa", "El codigoEmpresa es obligatorio").not().isEmpty(),
    validatorMap,
];
