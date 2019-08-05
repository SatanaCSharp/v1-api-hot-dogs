import { ISpice } from './ISpice';
import { Document } from 'mongoose';

export interface ISpiceModel extends ISpice, Document{}