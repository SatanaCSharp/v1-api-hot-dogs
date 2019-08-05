import { ISpiceModel } from './interfaces/ISpiceModel';
import  { Schema, model, Model} from 'mongoose';


const SpiceSchema: Schema = new Schema({
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
export const Spice: Model<ISpiceModel> = model<ISpiceModel>('Spice', SpiceSchema);