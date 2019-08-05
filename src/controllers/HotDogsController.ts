import { Request, Response } from 'express';
import {hotDogsService} from "../services/HotDogsService";

export  class HotDogsController {
    public async index(req: Request, res: Response):Promise<void> {
        await hotDogsService.findAll(req,res);
    }
    public async show(req: Request, res: Response):Promise<void> {
        await hotDogsService.findById(req, res);
    }
    public async store(req:Request, res: Response):Promise<void> {
        await hotDogsService.store(req, res);
    }
    public async update(req: Request, res: Response):Promise<void> {
        await hotDogsService.update(req, res);
    }

    public async delete(req: Request, res:Response): Promise<void> {
        await hotDogsService.delete(req, res);
    }
}
export  const hotDogsController: HotDogsController = new HotDogsController();