import { Script } from "../entities/Script";
import { Connection } from "typeorm";
export declare class ScriptController {
    constructor();
    static getAllScripts(connection: Connection): Promise<Script[]>;
    static saveScript(script: Script, connection: Connection): Promise<string>;
}
