import { Spice } from '../models/Spice';
import { SpiceEntity } from '../entities/SpiceEntity';
import { ISpiceModel } from '../models/interfaces/ISpiceModel';

export class SpiceMapper {
    public async findAll():Promise<ISpiceModel[]> {
        return await Spice.find({},'_id name').exec();
    }
    public async store(spiceEntity: SpiceEntity): Promise<ISpiceModel[]> {
        const spice: ISpiceModel = new Spice(spiceEntity);
        await spice.save();
        return await this.findAll();
    }
    public async findById(id:string): Promise<ISpiceModel| null> {
        return await Spice.findById( id, '_id name');
    }
    public async update(id:string, spiceEntity:SpiceEntity): Promise<ISpiceModel[]> {
        await Spice.updateOne({'_id': id}, spiceEntity);
        return await this.findAll();
    }
    public async delete(id: string): Promise<ISpiceModel[]> {
        await Spice.deleteOne({_id: id});
        return await this.findAll();
    }
}
export const spiceMapper: SpiceMapper = new SpiceMapper();