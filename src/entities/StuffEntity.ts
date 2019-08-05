export class StuffEntity {
    _id?:string;
    name?: string;
    public setId(id: string) {
        this._id = id;
    }
    public setName(name: string) {
        this.name = name;
    }
}