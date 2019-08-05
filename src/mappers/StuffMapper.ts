import { Stuff } from '../models/Stuff';
import { StuffEntity } from '../entities/StuffEntity';
import { IStuffModel } from '../models/interfaces/IStuffModel';

export class StuffMapper {
    public async findAll():Promise<IStuffModel[]> {
        return await Stuff.find({},'_id name').exec();
    }
    public async store(stuffEntity: StuffEntity): Promise<IStuffModel[]> {
        const stuff: IStuffModel = new Stuff(stuffEntity);
        await stuff.save();
        return await this.findAll();
    }
    public async update(id:string, stuffEntity: StuffEntity): Promise<IStuffModel[]> {
        await Stuff.updateOne({'_id': id}, stuffEntity);
        return await this.findAll();
    }
    public async delete(id: string): Promise<IStuffModel[]> {
        await Stuff.deleteOne({_id: id});
        return await this.findAll();
    }
}
export const stuffMapper: StuffMapper = new StuffMapper();
