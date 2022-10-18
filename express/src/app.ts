import { Cat } from "./cat";
import express from "express";
import router from "./cat.router";

class Server {
    public app: express.Application;

    constructor() {
        this.app = express();
    }

    private setRoute() {
        this.app.use("/cats", router);
    }

    private setMiddleware() {
        this.app.use(express.json());

        this.setRoute();

        this.app.use((req, res, next) => {
            res.send("404 NOT FOUND");
        });
    }

    public listen() {
        this.setMiddleware();

        this.app.listen(8000, () => {
            console.log("Server On...");
        });
    }
}

function init() {
    const server = new Server();
    server.listen();
}

init();
