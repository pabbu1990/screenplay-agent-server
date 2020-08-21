import { User } from "../entities/User";
export declare class UserController {
    constructor();
    static getAllUsers(): Promise<User[]>;
    static saveUser(user: User): Promise<string>;
}
