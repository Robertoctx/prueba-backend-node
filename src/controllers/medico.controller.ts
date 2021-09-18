import { Request, Response } from "express";
import { getManager, getRepository } from "typeorm";

import { Medico } from "../entities/Medico";

export const getAllMedicos = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const lista = await getRepository(Medico).find();
        return res.status(200).json({
            code: 200,
            message: "OK",
            data: lista,
        });
    } catch (err) {
        return res.status(500).json({
            code: 500,
            message: "Error no controlado",
            errorData: err,
        });
    }
};

export const getMedicos = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        let query = `SELECT 
        M.CODIGO_MEDICO AS codigoMedico,
        M.TIPO_IDENTIFICACION AS tipoIdentificacion,
        M.NUMERO_IDENTIFICACION AS numeroIdentificacion,
        M.PRIMER_NOMBRE AS primerNombre,
        M.SEGUNDO_NOMBRE AS segundoNombre,
        M.PRIMER_APELLIDO AS primerApellido,
        M.SEGUNDO_APELLIDO AS segundoApellido,
        M.NOMBRE_COMPLETO AS nombreCompleto,
        M.MAIL AS mail,
        M.FECHA_NACIMIENTO AS fechaNacimiento,
        M.SUELDO AS sueldo,
        M.SEXO AS sexo,
        M.CODIGO_SUCURSAL AS codigoSucursal,
        M.CODIGO_EMPRESA AS codigoEmpresa,
        M.USUARIO_REGISTRO AS usuarioRegistro,
        M.FECHA_REGISTRO AS fechaRegistro,
        S.NOMBRE_SUCURSAL AS nombreSucursal,
        S.REGION AS REGION
        FROM MEDICO M 
        JOIN SUCURSAL S ON M.CODIGO_SUCURSAL = S.CODIGO_SUCURSAL
        WHERE M.CODIGO_EMPRESA = 1`;
        if (req.query["codigoSucursal"]) {
            query += " AND S.CODIGO_SUCURSAL=" + req.query["codigoSucursal"];
        }
        if (req.query["region"])
            query += " AND S.REGION=" + req.query["region"];
        if (req.query["tipoFiltro"] && req.query["valorFiltro"]) {
            query +=
                " AND S.NOMBRE_COMPLETO LIKE '%" +
                req.query["valorFiltro"] +
                "%'";
        }
        const lista = await getRepository(Medico).query(query);

        //const lista = await getRepository(Medico).query("SELECT * FROM MEDICO");
        return res.status(200).json({
            code: 200,
            message: "OK",
            data: lista,
        });
    } catch (err) {
        return res.status(500).json({
            code: 500,
            message: "Error no controlado",
            errorData: err,
        });
    }
};

export const postMedico = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const medico = new Medico();
        getRepository(Medico).merge(medico, req.body);
        const _medico = await getRepository(Medico).create(medico);
        const result = await getRepository(Medico).save(_medico);
        return res.status(200).json({
            code: 200,
            message: "OK",
            data: {
                codigoMedico: result.codigoMedico,
            },
        });
    } catch (err) {
        return res.status(500).json({
            code: 500,
            message: "Error no controlado",
            errorData: err,
        });
    }
};
