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
            message: "Validación del Request",
            errorData: errors.mapped(),
        });
    }
    next();
};
