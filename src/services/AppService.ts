
import express from "express";
import bodyParser from "body-parser";
import errorHandler from "errorhandler";
import cors from "cors";
import mongoose from "mongoose";
import { config } from "../config";
// import { apiRouter } from "../routes/ApiRouter";


export class AppService {
    public run() {
        const app = express();
        mongoose.set("useCreateIndex", true);
        mongoose.connect(config.db.mongo.url, {useNewUrlParser: true});
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json({ limit: "50mb" }));
        app.use(cors());
        app.use(errorHandler());
        app.set("baseUrl", config.baseUrl);
        // app.use(apiRouter.getApiRouter);
        app.listen(config.server.port, () => {
            console.log(`An app is running using ${config.baseUrl}`);
        });
    }
}
export const appService: AppService = new AppService();