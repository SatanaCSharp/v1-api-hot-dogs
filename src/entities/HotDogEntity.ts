import { SpiceEntity } from './SpiceEntity';
import { StuffEntity } from './StuffEntity';

export class HotDogEntity {
    _id?:string;
    name? : string;
    description? : string;
    stuff?: StuffEntity[];
    spices?: SpiceEntity[];

    public setName(name: string) {
        this.name = name;
    }
    public setDescription(description: string){
        this.description = description;
    }
    public setStuff(stuffEntities: StuffEntity[]) {
        this.stuff = stuffEntities;
    }
    public setSpices(spiceEntities: SpiceEntity[]) {
        this.spices = spiceEntities;
    }
}