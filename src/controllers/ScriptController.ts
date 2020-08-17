import {Request, Response} from "express";
import {getManager} from "typeorm";
import Script from "../entities/Script";

/**
 * Loads all scripts from the database.
 */
export async function getAllScripts(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const scriptRepository = getManager().getRepository(Script);

    // load a post by a given post id
    const scripts = await scriptRepository.find();

    // return loaded posts
    response.send(scripts);
}

/**
 * Saves given script.
 */
export async function saveScript(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const scriptRepository = getManager().getRepository(Script);

    // create a real post object from post json object sent over http
    const newScript = scriptRepository.create(request.body);

    // save received post
    await scriptRepository.save(newScript);

    // return saved post back
    response.send(newScript);
}