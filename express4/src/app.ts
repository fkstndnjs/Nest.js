import "module-alias/register";
import express from "express";
import router from "@src/route";

class App {
  private app;
  constructor() {
    this.app = express();
  }

  private router() {
    this.app.use(router);
  }

  private middleware() {
    this.app.use(express.json());

    this.router();

    this.app.use((req, res, next) => {
      res.send("404 NOT FOUND!!");
    });
  }

  public startServer() {
    this.middleware();

    this.app.listen(8000, () => {
      console.log("Server On..");
    });
  }
}

function init() {
  const server = new App();

  server.startServer();
}

init();
