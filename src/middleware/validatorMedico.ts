import { check } from "express-validator";

import { validatorMap } from "../helpers/validatorMap";

export const validatorPostBodyMedico: any = [
    check("tipoIdentificacion", "El tipoIdentificacion es obligatorio")
        .not()
        .isEmpty(),
    check("numeroIdentificacion", "El numeroIdentificacion es obligatorio")
        .not()
        .isEmpty(),
    check("primerNombre", "El primerNombre es obligatorio").not().isEmpty(),
    check("primerApellido", "El primerApellido es obligatorio").not().isEmpty(),
    check("segundoApellido", "El segundoApellido es obligatorio")
        .not()
        .isEmpty(),
    check("mail", "El mail es obligatorio y con formato email").not().isEmpty().isEmail(),
    check("sueldo", "El sueldo es obligatorio").not().isEmpty(),
    check("sexo", "El sexo es obligatorio").not().isEmpty(),
    check("codigoSucursal", "El codigoSucursal es obligatorio").not().isEmpty(),
    check("codigoEmpresa", "El codigoEmpresa es obligatorio").not().isEmpty(),
    validatorMap,
];

export const validatorGetBodyMedico: any = [
    check("codigoEmpresa", "El codigoEmpresa es obligatorio").not().isEmpty(),
    validatorMap,
];
