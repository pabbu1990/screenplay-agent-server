import {Script} from "../entities/Script";
import {User} from "../entities/User";

export class ScriptController {
    constructor() {
    }

    public static async getAllScripts() {
        console.log('request received to get all scripts');
        return await Script.find();
    }

    public static async saveScript(script: Script) {
        console.log('request received to save script with name: ' + script.name);
        const user: User = script.user;
        const userToSave: User = new User();

        userToSave.name = user.name;
        userToSave.email = user.email;

        await userToSave.save();

        const scriptToSave = new Script();
        scriptToSave.user = userToSave;
        scriptToSave.name = script.name;

        // Object.keys(script).forEach(key => scriptToSave[key] = user[script]);

        await scriptToSave.save();

        return JSON.stringify(scriptToSave);
    }
}