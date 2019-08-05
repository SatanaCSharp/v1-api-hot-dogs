import { Request, Response } from 'express';
import {stuffService} from "../services/StuffService";

export  class StuffController {
    public async index(req: Request, res: Response):Promise<void> {
        await stuffService.findAll(req,res);
    }
    public async store(req:Request, res: Response):Promise<void> {
        await stuffService.store(req, res);
    }
    public async update(req: Request, res: Response):Promise<void> {
        await stuffService.update(req, res);
    }

    public async delete(req: Request, res:Response): Promise<void> {
        await stuffService.delete(req, res);
    }
}
export const stuffController: StuffController = new StuffController();
