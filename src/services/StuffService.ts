import { Request, Response } from "express";
import {stuffRepository} from "../repositories/StuffRepository";


class StuffService {
    public async findAll(req: Request, res:Response):Promise<void> {
        try{
            res.send( await  stuffRepository.findAll());
        } catch (err) {
            res.sendStatus(500);
        }
    }
    public async store(req: Request, res:Response):Promise<void> {
        try{
            res.send(await stuffRepository.store(req));
        } catch (err) {
            res.sendStatus(500);
        }
    }
    public async update(req: Request, res:Response):Promise<void> {
        try{
            res.send(await stuffRepository.update(req.params.id, req));
        } catch (err) {
            res.sendStatus(500);
        }
    }
    public async delete(req: Request, res:Response):Promise<void> {
        try{
            res.send(await stuffRepository.delete(req.params.id));
        } catch (err) {
            res.sendStatus(500);
        }
    }
}
export  const stuffService: StuffService = new StuffService();