import { Request, Response } from "express";

export const notFound = async (
    req: Request,
    res: Response
): Promise<Response> => {
    return res.status(404).json({
        code: 404,
        message: "Servicio no encontrado",
        errorData: {},
    });
};
