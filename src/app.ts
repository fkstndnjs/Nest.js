import * as express from "express";
import CatsRouter from "./cats/cats.route";

class Server {
    public app;

    constructor() {
        const app = express();
        this.app = app;
    }

    private setRoute() {
        this.app.use("/cats", CatsRouter);
    }

    private setMiddleWare() {
        this.app.use((req, res, next) => {
            console.log(req.rawHeaders[1]);
            next();
        });

        this.app.use(express.json());

        this.setRoute();

        this.app.use((req, res, next) => {
            res.send({ error: "404 not found!" });
        });
    }

    public listen() {
        this.setMiddleWare();
        this.app.listen(8000, () => {
            console.log(`listening at http://localhost:8000/...`);
        });
    }
}

function init() {
    const server = new Server();
    server.listen();
}

init();
