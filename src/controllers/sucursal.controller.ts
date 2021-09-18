import { Request, Response } from "express";
import { getRepository } from "typeorm";

import { Sucursal } from "../entities/Sucursal";

export const getAllSucursales = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const lista = await getRepository(Sucursal).find();
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

export const putSucursal = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const codigoSucursal = req.params.codigoSucursal;
        const codigoEmpresa = req.query.codigoEmpresa;
        if (!codigoSucursal) {
            return res.status(400).json({
                code: 400,
                message: "El codigoSucursal es obligatorio",
                errorData: {},
            });
        }
        if (!codigoEmpresa) {
            return res.status(400).json({
                code: 400,
                message: "El codigoEmpresa es obligatorio",
                errorData: {},
            });
        }
        const sucursal = await getRepository(Sucursal).findOne({
            where: {
                codigoEmpresa: codigoEmpresa,
                codigoSucursal: codigoSucursal,
            },
        });
        if (!sucursal) {
            return res.status(400).json({
                code: 400,
                message: "El codigoSucursal no ha sido encontrado",
                data: sucursal,
            });
        }
        getRepository(Sucursal).merge(sucursal, req.body);
        const resultado = await getRepository(Sucursal).save(sucursal);
        return res.status(200).json({
            code: 200,
            message: "OK",
            data: resultado,
        });
    } catch (err) {
        return res.status(500).json({
            code: 500,
            message: "Error no controlado",
            errorData: err,
        });
    }
};