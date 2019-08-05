import {IHotDogModel} from "../../models/interfaces/IHotDogModel";
import {Request} from "express";

export interface IHotDogsRepository {
    findAll(): Promise<IHotDogModel[]>;
    findById(id:string): Promise<IHotDogModel| null>;
    store(req: Request): Promise<IHotDogModel[]>;
    update(id:string, req: Request): Promise<IHotDogModel[]>;
    delete(id:string): Promise<IHotDogModel[]>;
}
