import { Request, Response } from 'express';
export declare const handlerWrapper: (fn: (req: Request, response: Response) => any) => (req: Request, res: Response) => Promise<void>;
