import { User } from "../entities/User";
import { Connection } from "typeorm";
export declare class UserController {
    constructor();
    static getAllUsers(connection: Connection): Promise<User[]>;
    static saveUser(user: User, connection: Connection): Promise<string>;
}
