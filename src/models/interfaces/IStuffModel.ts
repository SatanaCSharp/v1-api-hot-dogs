import { IStuff } from './IStuff';
import {Document} from 'mongoose';

export interface IStuffModel extends IStuff, Document{}