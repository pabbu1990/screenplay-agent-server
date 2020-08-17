import Script from "../entities/Script";
import {getManager} from "typeorm";

export class ScriptController {
    constructor() {
    }

    public static async getAllScripts() {
        // connection
        //     .then(async connection => {
        //         const scripts: Script[] = await connection.manager.find(Script);
        //         return scripts;
        //     })
        //     .catch(error => {
        //         console.error("Error ", error);
        //         return error;
        //     });

        const scriptRepository = getManager().getRepository(Script);

        // load a post by a given post id
        return await scriptRepository.find();
    }

    public static async saveScript(script: Script) {
        const scriptRepository = getManager().getRepository(Script);

        // create a real post object from post json object sent over http
        const newScript = scriptRepository.create(script);

        // save received post
        await scriptRepository.save(newScript);

        return newScript;
    }

    // /**
    //  * Loads all scripts from the database.
    //  */
    // export async function getAllScripts(request: Request, response: Response) {
    //
    //     // get a post repository to perform operations with post
    //     const scriptRepository = getManager().getRepository(Script);
    //
    //     // load a post by a given post id
    //     const scripts = await scriptRepository.find();
    //
    //     // return loaded posts
    //     response.send(scripts);
    // }

    // /**
    //  * Saves given script.
    //  */
    // export async function saveScript(request: Request, response: Response) {
    //
    //     // get a post repository to perform operations with post
    //     const scriptRepository = getManager().getRepository(Script);
    //
    //     // create a real post object from post json object sent over http
    //     const newScript = scriptRepository.create(request.body);
    //
    //     // save received post
    //     await scriptRepository.save(newScript);
    //
    //     // return saved post back
    //     response.send(newScript);
    // }
}