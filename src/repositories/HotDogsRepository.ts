import { Request } from 'express';
import { hotDogMapper } from "../mappers/HotDogMapper";
import {HotDogEntity} from "../entities/HotDogEntity";
import {SpiceEntity} from "../entities/SpiceEntity";
import {StuffEntity} from "../entities/StuffEntity";
import {IHotDogsRepository} from "./interfaces/IHotDogsRepository";

export class HotDogsRepository implements IHotDogsRepository{

    private  setSpices( hotDogEntity: HotDogEntity, spices: any ) {
        if(spices.length !== 0) {
            const spiceEntities: SpiceEntity[] = [];
            for (let spice of spices) {
                let spiceEntity: SpiceEntity = new SpiceEntity();
                spiceEntity.setId(spice._id);
                spiceEntity.setName(spice.name);
                spiceEntities.push(spiceEntity);
            }
            hotDogEntity.setSpices(spiceEntities);
        }
    }

    private  setStuff( hotDogEntity: HotDogEntity, stuff: any ) {
        if(stuff.length !== 0) {
            const stuffEntities: StuffEntity[] = [];
            for (let stuffItem of stuff){
                let stuffEntity: StuffEntity = new StuffEntity();
                stuffEntity.setId(stuffItem._id);
                stuffEntity.setName(stuffItem.name);
                stuffEntities.push(stuffEntity);
            }
            hotDogEntity.setStuff(stuffEntities);
        }
    }

    public async findAll() {
        return await hotDogMapper.findAll();
    }

    public async findById(id:string) {
        return await  hotDogMapper.findById(id);
    }

    public async store(req: Request) {
        const hotDogEntity: HotDogEntity  = new HotDogEntity();
        hotDogEntity.setName(req.body.name);
        hotDogEntity.setDescription(req.body.description);
        this.setSpices(hotDogEntity, req.body.spices);
        this.setStuff(hotDogEntity, req.body.stuff);
        return await  hotDogMapper.store(hotDogEntity);
    }

    public async update(id:string, req: Request) {
        const hotDogEntity: HotDogEntity  = new HotDogEntity();
        hotDogEntity.setName(req.body.name);
        hotDogEntity.setDescription(req.body.description);
        this.setSpices(hotDogEntity, req.body.spices);
        this.setStuff(hotDogEntity, req.body.stuff);
        return await hotDogMapper.update(id, hotDogEntity);
    }

    public async delete(id: string) {
        return await hotDogMapper.delete(id);
    }
}
export const  hotDogsRepository: HotDogsRepository = new HotDogsRepository();