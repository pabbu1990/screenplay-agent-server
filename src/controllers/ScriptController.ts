import {Script} from "../entities/Script";
import {User} from "../entities/User";
import {Connection} from "typeorm";

export class ScriptController {
    constructor() {
    }

    public static async getAllScripts(connection: Connection) {
        console.log('request received to get all scripts');
        return await Script.find();
    }

    public static async saveScript(script: Script, connection: Connection) {
        console.log('request received to save script with name: ' + script.name);
        const user: User = script.user;
        let userRepo = connection.getRepository(User);
        let userToSave: User = await userRepo.findOne({email: user.email});
        if (!userToSave) {
            userToSave = new User();
            userToSave.name = user.name;
            userToSave.email = user.email;
        }

        await userToSave.save();

        const scriptToSave: Script = new Script();
        scriptToSave.user = userToSave;
        scriptToSave.name = script.name;
        scriptToSave.logLine = script.logLine;
        // Object.keys(script).forEach(key => scriptToSave[key] = user[script]);

        await scriptToSave.save();

        return JSON.stringify(scriptToSave);
    }
}