import { HotDog } from '../models/HotDog';
import { HotDogEntity } from '../entities/HotDogEntity';
import { IHotDogModel } from '../models/interfaces/IHotDogModel';

export class HotDogMapper {
    public async findAll(): Promise<IHotDogModel[]> {
        return await HotDog.find({},'_id name description createdAt')
            .populate('stuff', '_id name')
            .populate('spices', '_id name')
            .exec();
    }
    public async findById(id:string): Promise<IHotDogModel| null> {
        return await HotDog.findById(id, '_id name description createdAt')
            .populate('stuff', '_id name')
            .populate('spices', '_id name')
            .exec();
    }
    public async store(hotDogEntity: HotDogEntity): Promise<IHotDogModel[]> {
        const hotDog:IHotDogModel = new HotDog(hotDogEntity);
        await hotDog.save();
        return await this.findAll();
    }
    public async update(id:string, hotDogEntity: HotDogEntity): Promise<IHotDogModel[]> {
        await HotDog.updateOne({'_id': id}, hotDogEntity);
        return await this.findAll();
    }
    public async delete(id: string): Promise<IHotDogModel[]> {
        await HotDog.deleteOne({_id: id});
        return await this.findAll();
    }
}
export const hotDogMapper: HotDogMapper = new HotDogMapper();