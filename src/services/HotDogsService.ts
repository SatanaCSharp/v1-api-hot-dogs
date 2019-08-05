import { Request, Response } from 'express';
import { hotDogsRepository } from "../repositories/HotDogsRepository";
class HotDogsService {

    public  async findAll(req: Request, res:Response):Promise<void> {
        try {
            res.send(await hotDogsRepository.findAll());
        } catch (err) {
            res.sendStatus(500);
        }
    }

    public  async findById(req: Request, res:Response):Promise<void> {
        try {
            res.send(await hotDogsRepository.findById(req.params.id));
        } catch (err) {
            res.sendStatus(500);
        }
    }

    public  async store(req: Request, res:Response):Promise<void> {
        try {
            res.send(await hotDogsRepository.store(req));
        } catch (err) {
            res.sendStatus(500);
        }
    }

    public  async update(req: Request, res:Response):Promise<void> {
        try {
            res.send(await hotDogsRepository.update(req.params.id, req));
        } catch (err) {
            res.sendStatus(500);
        }
    }

    public  async delete(req: Request, res:Response):Promise<void> {
        try {
            res.send(await hotDogsRepository.delete(req.params.id));
        } catch (err) {
            res.sendStatus(500);
        }
    }
}
export const hotDogsService: HotDogsService = new HotDogsService();