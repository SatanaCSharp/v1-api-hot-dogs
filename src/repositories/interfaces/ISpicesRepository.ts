import {ISpiceModel} from "../../models/interfaces/ISpiceModel";
import {Request} from "express";

export interface ISpicesRepository {
    findAll(): Promise<ISpiceModel[]>;
    store(req: Request): Promise<ISpiceModel[]>;
    update(id: string, req: Request): Promise<ISpiceModel[]>;
    delete(id: string): Promise<ISpiceModel[]>;
}