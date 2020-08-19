import {Script} from "../entities/Script";

export class ScriptController {
    constructor() {
    }

    public static async getAllScripts() {
        console.log('request received to get all scripts');
        return await Script.find();
    }

    public static async saveScript(script: Script) {
        console.log('request received to save script with name: ' + script.name);
        const scriptToSave = new Script();
        scriptToSave.name = script.name;

        await scriptToSave.save();

        return JSON.stringify(scriptToSave);
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