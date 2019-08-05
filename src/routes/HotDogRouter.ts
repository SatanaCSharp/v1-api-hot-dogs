import { HotDogsMiddleware } from '../middlewares/HotDogsMiddleware';
import { Router } from 'express';
import { AbstractRouter } from './AbstractRouter';
import { HotDogsController, hotDogsController } from "../controllers/HotDogsController";

class HotDogRouter extends  AbstractRouter {
    private _hotDogsMiddleware: HotDogsMiddleware;
    constructor(public router: Router, private _hotDogsController: HotDogsController){
        super(router);
        this._hotDogsMiddleware = new HotDogsMiddleware();
        this.router.route("/").get(this._hotDogsController.index);
        this.router.route("/:id").get( this._hotDogsController.show);
        this.router.route("/").post(this._hotDogsMiddleware.request, this._hotDogsController.store);
        this.router.route("/:id").put(this._hotDogsMiddleware.request, this._hotDogsController.update);
        this.router.route("/:id").delete(this._hotDogsController.delete);
    }
}
export  const hotDogRouter: Router = new  HotDogRouter(Router(),hotDogsController).getApiRouter;