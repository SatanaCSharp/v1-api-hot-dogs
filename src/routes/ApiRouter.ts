import { Router } from "express";
import { config } from "../config";
import { AbstractRouter } from './AbstractRouter';
import { IApiRouter } from "./interfaces/IApiRouter";
import { routesMiddleware } from "../middlewares/RoutesMiddleware";
import { spiceRouter } from "./SpiceRouter";
import { stuffRouter } from "./SuffRouter";

export class ApiRouter extends AbstractRouter{
    constructor(public router: Router, private routes: IApiRouter[]){
        super(router);
        this.setupApiRoutes(this.routes);
    }
    private addApiRouter(url:string, router:Router){
        this.router.use(url, router);
    }

    private setupApiRoutes(routes: IApiRouter[]) {
        routes.forEach((route)=> {
            console.log("Route: ", `/${config.api.version}${route.url}`); //Route-List;
            this.addApiRouter(`/${config.api.version}${route.url}`, route.router);
        });
        this.router.use(routesMiddleware.unauthorized);
        this.router.all('*',routesMiddleware.notFound);
    }
}

const  apiRoutes: IApiRouter[] = [
    {url: '/spices', router: spiceRouter},
    {url: '/stuff', router: stuffRouter},
];

export const apiRouter = new ApiRouter(Router(), apiRoutes);