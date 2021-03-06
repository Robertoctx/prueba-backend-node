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

export const postSucursal = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const sucursal = new Sucursal();
        getRepository(Sucursal).merge(sucursal, req.body);
        const _codigoSucursal = await getRepository(Sucursal)
            .createQueryBuilder("s")
            .select("NVL(MAX(s.codigoSucursal),0)+1", "cod")
            .getRawOne();
        sucursal.codigoSucursal = _codigoSucursal.cod;
        const _sucursal = await getRepository(Sucursal).create(sucursal);
        const result = await getRepository(Sucursal).save(_sucursal);
        return res.status(200).json({
            code: 200,
            message: "OK",
            data: {
                codigoSucursal: result.codigoSucursal,
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

export const putSucursal = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const sucursal = await getRepository(Sucursal).findOne({
            where: {
                codigoEmpresa: req.params.codigoSucursal,
                codigoSucursal: req.query.codigoEmpresa,
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
