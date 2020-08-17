import "reflect-metadata";
import express from 'express';
import bodyParser from 'body-parser';
import {ScriptController} from "./controllers/ScriptController";
import {ConnectionOptions, createConnection} from 'typeorm';

// export let dbOptions: ConnectionOptions = {
//     type: "postgres",
//     host: "localhost",
//     port: 5432,
//     username: "pabbu",
//     password: "pabbu",
//     database: "screenplayagent",
//     synchronize: true,
//     logging: true,
//     entities: ["src/entities/**/*.ts", "dist/entities/**/*.js"]
// }

createConnection().then(async connection => {

    const PORT = process.env.PORT || 3001;
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.get('/', async (req, res) => {
        res.send(`Screenplay agent@$`);
    });

    app.get('/scripts', async (req, res) => {
        res.send(ScriptController.getAllScripts());
    });

    app.post('/scripts', async (req, res) => {
        res.send(ScriptController.saveScript(req.body));
    });

    // export const connectDB = async () => {
    //     await createConnection();
    // };

    const startServer = async () => {
        app.listen(PORT, () => {
            console.log(`Server is running in http://localhost:${PORT}`)
        });
    };

    (async () => {
        // await connectDB();
        await startServer();
    })();
    console.log("Connected to DB");
}).catch(error => console.log("TypeORM connection error: ", error));
