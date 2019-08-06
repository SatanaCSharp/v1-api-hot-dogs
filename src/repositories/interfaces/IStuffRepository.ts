import {IStuffModel} from "../../models/interfaces/IStuffModel";
import {Request} from "express";

export interface IStuffRepository {
    findAll(): Promise<IStuffModel[]>;
    store(req: Request): Promise<IStuffModel[]>;
    findById(id:string): Promise<IStuffModel| null>
    update(id:string, req: Request): Promise<IStuffModel[]>;
    delete(id:string): Promise<IStuffModel[]>;
}