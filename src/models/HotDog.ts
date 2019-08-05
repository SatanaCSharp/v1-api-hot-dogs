import { IHotDogModel } from './interfaces/IHotDogModel';
import  { Schema, model, Model} from 'mongoose';

const HotDogSchema: Schema = new Schema ({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    stuff: [{
        type: Schema.Types.ObjectId,
        ref: 'Stuff',
        required: true
    }],
    spices: [{
        type: Schema.Types.ObjectId,
        ref: 'Spice',
        required: true
    }],
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    }
});
export const HotDog: Model<IHotDogModel> = model<IHotDogModel>('HotDog', HotDogSchema);