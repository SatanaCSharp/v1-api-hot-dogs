import { IStuffModel } from './interfaces/IStuffModel';
import  { Schema, model, Model} from 'mongoose';


const StuffSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    }
});
export const Stuff: Model<IStuffModel> = model<IStuffModel>('Stuff', StuffSchema);
