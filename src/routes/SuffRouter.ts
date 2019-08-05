import { StuffMiddleware } from '../middlewares/SuffMiddleware';
import { Router } from 'express';
import { AbstractRouter } from './AbstractRouter';
import { StuffController, stuffController } from "../controllers/StuffController";

class StuffRouter extends AbstractRouter {
    private _stuffMiddleware: StuffMiddleware;
    constructor(public router: Router, private _stuffController: StuffController){
        super(router);
        this._stuffMiddleware = new StuffMiddleware();
        this.router.route("/").get(this._stuffController.index);
        this.router.route("/").post(this._stuffMiddleware.request, this._stuffController.store);
        this.router.route("/:id").put(this._stuffMiddleware.request,this._stuffController.update);
        this.router.route("/:id").delete(this._stuffController.delete);
    }
}

export const stuffRouter: Router = new StuffRouter(Router(), stuffController).getApiRouter;