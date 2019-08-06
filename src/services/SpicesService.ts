import { Request, Response } from "express";
import {spicesRepository} from "../repositories/SpicesRepository";

class SpicesService {
    public async findAll(req: Request, res:Response):Promise<void> {
        try{
            res.send( await  spicesRepository.findAll());
        } catch (err) {
            res.sendStatus(500);
        }
    }
    public  async findById(req: Request, res:Response):Promise<void> {
        try {
            res.send(await spicesRepository.findById(req.params.id));
        } catch (err) {
            res.sendStatus(500);
        }
    }
    public async store(req: Request, res:Response):Promise<void> {
        try{
            res.send(await spicesRepository.store(req));
        } catch (err) {
            res.sendStatus(500);
        }
    }
    public async update(req: Request, res:Response):Promise<void> {
        try{
            res.send(await spicesRepository.update(req.params.id, req));
        } catch (err) {
            res.sendStatus(500);
        }
    }
    public async delete(req: Request, res:Response):Promise<void> {
        try{
            res.send(await spicesRepository.delete(req.params.id));
        } catch (err) {
            res.sendStatus(500);
        }
    }
}
export  const spicesService: SpicesService = new SpicesService();