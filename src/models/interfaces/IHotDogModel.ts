import { IHotDog } from './IHotDog';
import {Document} from 'mongoose';

export interface IHotDogModel extends IHotDog, Document{}