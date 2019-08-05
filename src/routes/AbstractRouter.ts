import { Router } from 'express';

export abstract class AbstractRouter {
    constructor(public router: Router){}

    public get getApiRouter(): Router{
        return this.router;
    }
}