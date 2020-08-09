import { Request, Response } from 'express';

export const handlerWrapper = (fn: (req: Request, response: Response) => any) => {
    return async (req: Request, res: Response) => {
        try {
            console.log('hello')
            const ret = await fn(req, res);
            res.status(200).send(ret);
        } catch (err) {
            res.status(err.status || 400).send(err);
        }
    };
};
