import { Request } from 'express';
export class HotDogsRequest {
    fields: boolean[];
    constructor( req:Request ) {
        this.fields = this.getSetFields(req);
    }
    private  isName(req:Request): boolean {
        return req.body.name !== undefined && req.body.name.length > 5 ? true: false;
    }

    private isDescription(req:Request): boolean {
        return req.body.description !== undefined && req.body.name.length > 10 ? true: false;
    }

    private isStuff(req:Request): boolean {
        return req.body.stuff && req.body.stuff.length > 0 ? true: false;
    }

    private isSpices(req:Request): boolean {
        return req.body.spices ? true: false;
    }

    private  getSetFields(req:Request): boolean[] {
        return [
            this.isName(req),
            this.isDescription(req),
            this.isStuff(req),
            this.isSpices(req)
        ];
    }
}