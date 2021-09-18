import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export const validatorMap = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            code: 400,
            message: "Faltan campos en el Request Body",
            errorData: errors.mapped(),
        });
    }
    next();
};
