import { Request, Response } from "express";
import { getRepository } from "typeorm";

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
        const query = getRepository(Medico)
            .createQueryBuilder("medico")
            .innerJoinAndSelect("medico.sucursal", "sucursal")
            .where("medico.codigoEmpresa = :codigoEmpresa", {
                codigoEmpresa: req.query.codigoEmpresa,
            });
        if (req.query.codigoSucursal) {
            query.andWhere("medico.codigoSucursal = :codigoSucursal", {
                codigoSucursal: req.query.codigoSucursal,
            });
        }
        if (req.query.region) {
            query.andWhere("UPPER(sucursal.region) = UPPER(:region)", {
                region: req.query.region,
            });
        }
        if (req.query.tipoFiltro && req.query.valorFiltro) {
            if (req.query.tipoFiltro == "nombreMedico") {
                query.andWhere(
                    "UPPER(medico.nombreCompleto) LIKE UPPER(:nombreCompleto)",
                    {
                        nombreCompleto: `%${req.query.valorFiltro}%`,
                    }
                );
            } else {
                return res.status(400).json({
                    code: 400,
                    message: "El tipoFiltro no es válido",
                    errorData: {},
                });
            }
        }
        const lista = await query.getMany();
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
