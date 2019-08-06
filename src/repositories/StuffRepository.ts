import { Request } from 'express';
import {stuffMapper} from "../mappers/StuffMapper";
import {StuffEntity} from "../entities/StuffEntity";
import {IStuffRepository} from "./interfaces/IStuffRepository";

export class StuffRepository implements  IStuffRepository{

    public async findAll() {
        return await stuffMapper.findAll();
    }
    public async findById(id:string) {
        return await stuffMapper.findById(id);
    }
    public async store(req: Request) {
        const stuffEntity: StuffEntity = new StuffEntity();
        stuffEntity.setName(req.body.name);
        return await  stuffMapper.store(stuffEntity);
    }
    public async update(id:string, req: Request) {
        const stuffEntity: StuffEntity = new StuffEntity();
        stuffEntity.setName(req.body.name);
        return await  stuffMapper.update(id, stuffEntity);
    }
    public async delete(id: string) {
        return await stuffMapper.delete(id);
    }
}
export  const  stuffRepository: StuffRepository = new StuffRepository();