import "reflect-metadata";
import express from 'express';
import bodyParser from 'body-parser';
import {ScriptController} from "./controllers/ScriptController";
import {ConnectionOptions, createConnection} from 'typeorm';
import {UserController} from "./controllers/UserController";

export const config: ConnectionOptions = {
    type: 'postgres',
    host: process.env.TYPEORM_HOST,
    port: Number(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [
        __dirname + '/../**/entities/*{.ts,.js}'
    ],
    synchronize: true,
};

createConnection(config).then(async connection => {
    const PORT = process.env.PORT || 3000;
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.set('env', process.env.APP_ENV);

    app.get('/', async (req, res) => {
        res.send(`Screenplay agent@$`);
    });

    app.get('/scripts', async (req, res) => {
        const scripts = await ScriptController.getAllScripts(connection);
        res.send(JSON.stringify(scripts));
    });

    app.get('/users', async (req, res) => {
        const users = await UserController.getAllUsers(connection);
        res.send(JSON.stringify(users));
    });

    app.post('/scripts', async (req, res) => {
        res.send(await ScriptController.saveScript(req.body, connection));
    });

    app.post('/users', async (req, res) => {
        try {
            res.send(await UserController.saveUser(req.body, connection));
        } catch (e) {
            res.send(e.message);
        }
    });

    const startServer = async () => {
        app.listen(PORT, () => {
            console.log(`Server is running in http://localhost:${PORT}`)
        });
    };

    (async () => {
        await startServer();
    })();
    console.log("Connected to DB");
}).catch(error => console.log("TypeORM connection error: ", error));
