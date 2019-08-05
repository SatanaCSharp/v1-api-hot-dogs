import 'dotenv/config';
export const config =  {
    api:{
        version: "v1"
    },
    server: {
        host: process.env.HOST || "127.0.0.1",
        port: process.env.PORT || "5000",
    },

    baseUrl: process.env.BASE_URL || "http://localhost:5000",

    db: {
        mongo: {
            url: process.env.MONGO_DB_CONNECTION_URL || "mongodb://localhost:27017/hotdb"
        },
    }
};