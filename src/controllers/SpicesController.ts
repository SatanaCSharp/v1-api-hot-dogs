import { Request, Response } from 'express';
import {spicesService} from "../services/SpicesService";

export class SpicesController {
    public async index(req: Request, res: Response):Promise<void> {
        await spicesService.findAll(req,res);
    }
    public async store(req:Request, res: Response):Promise<void> {
        await spicesService.store(req, res);
    }
    public async update(req: Request, res: Response):Promise<void> {
        await spicesService.update(req, res);
    }

    public async delete(req: Request, res:Response): Promise<void> {
        await spicesService.delete(req, res);
    }
}
export  const spicesController: SpicesController = new SpicesController();