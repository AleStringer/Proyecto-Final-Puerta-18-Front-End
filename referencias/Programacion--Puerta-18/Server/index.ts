import { Servidor } from "./classes/server";
import { router } from "./routes/router";
const cors = require("cors")
const bodyParser = require("body-parser");

let server = new Servidor();

server.app.use(bodyParser.urlencoded({
    extended: true
}));
server.app.use(bodyParser.json());

server.app.use(cors({ origin: true, credentials: true }));
// Credenciales de seguridad

server.app.use('/', router)

server.start(() => {
    console.log("servidor corriendo en " + server.port);
});



