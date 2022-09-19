const express = require("express")
import { SERVER_PORT } from '../global/environment';

export class Servidor {
    //@ts-ignore
    public app: express.Application;
    public port: number;

    public constructor(){
        console.log("wewew")
        this.app = express();
        this.port = SERVER_PORT;
    }

    start (callback: Function) {
        this.app.listen(this.port, callback());
    }
}