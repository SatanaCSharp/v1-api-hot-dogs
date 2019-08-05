import { ISpice } from './ISpice';
import { IStuff } from './IStuff';
export interface IHotDog {
    name: string;
    description: string;
    stuff: IStuff[];
    spices: ISpice[];
}