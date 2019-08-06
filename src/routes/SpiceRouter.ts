import { SpicesMiddleware,spicesMiddleware } from '../middlewares/SpicesMiddleware';
import { Router } from 'express';
import { AbstractRouter } from './AbstractRouter';
import { SpicesController, spicesController } from "../controllers/SpicesController";

class SpiceRouter extends  AbstractRouter {
    constructor(public router: Router, private _spicesMiddleware: SpicesMiddleware, private _spicesController: SpicesController){
        super(router);
        this.router.route("/").get(this._spicesController.index);
        this.router.route("/:id").get(this._spicesController.show);
        this.router.route("/").post(this._spicesMiddleware.request, this._spicesController.store);
        this.router.route("/:id").put(this._spicesMiddleware.request, this._spicesController.update);
        this.router.route("/:id").delete(this._spicesController.delete);

    }
}
export  const spiceRouter: Router = new  SpiceRouter(Router(),spicesMiddleware, spicesController).getApiRouter;