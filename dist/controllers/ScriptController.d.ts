import Script from "../entities/Script";
export declare class ScriptController {
    constructor();
    static getAllScripts(): Promise<Script[]>;
    static saveScript(script: Script): Promise<Script>;
}
