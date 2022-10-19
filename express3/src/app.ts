import "module-alias/register";
import express from "express";
import { Cat } from "@src/cat";
import router from "@src/app.route";

class Server {
    private app: express.Application;
    constructor() {
        this.app = express();
    }

    private setRouter() {
        this.app.use("/cats", router);
    }

    private setMiddleware() {
        this.app.use((req, res, next) => {
            console.log(req.path, req.method);

            next();
        });

        this.app.use(express.json());

        this.setRouter();

        this.app.use((req, res) => {
            res.send("404 NOT FOUND!!!");
        });
    }

    public startServer() {
        this.setMiddleware();

        this.app.listen(8000, () => {
            console.log("Server On...");
        });
    }
}

function init() {
    const server = new Server();

    server.startServer();
}

init();
