import { Request } from 'express';
import {spiceMapper} from "../mappers/SpiceMapper";
import {SpiceEntity} from "../entities/SpiceEntity";
import {ISpicesRepository} from "./interfaces/ISpicesRepository";

export class SpicesRepository implements  ISpicesRepository{

    public async findAll() {
        return await spiceMapper.findAll();
    }

    public async findById(id:string) {
        return await  spiceMapper.findById(id);
    }

    public async store(req: Request) {
        const spiceEntity: SpiceEntity = new SpiceEntity();
        spiceEntity.setName(req.body.name);
        return await  spiceMapper.store(spiceEntity);
    }

    public async update(id:string, req: Request) {
        const spiceEntity: SpiceEntity = new SpiceEntity();
        spiceEntity.setName(req.body.name);
        return await  spiceMapper.update(id, spiceEntity);
    }

    public async delete(id: string) {
        return await  spiceMapper.delete(id);
    }
}
export  const  spicesRepository: SpicesRepository = new SpicesRepository();