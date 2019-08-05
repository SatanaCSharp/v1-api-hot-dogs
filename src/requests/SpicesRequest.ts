import { Request } from 'express';
export class SpicesRequest {
    fields: boolean[];
    constructor(req: Request) {
        this.fields = this.getSetFields(req);
    }
    private isName(req:Request): boolean {
        return req.body.name !== undefined && req.body.name.length > 4 ? true: false;
    }

    private  getSetFields(req:Request): boolean[] {
        return [
            this.isName(req)
        ];
    }
}