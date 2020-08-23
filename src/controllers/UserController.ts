import {User} from "../entities/User";
import {Connection} from "typeorm";

export class UserController {
    constructor() {
    }

    public static async getAllUsers(connection: Connection) {
        console.log('request received to get all users');
        let userRepo = connection.getRepository(User);
        return await userRepo.find({relations: ["script"]});
    }

    public static async saveUser(user: User, connection: Connection) {
        console.log('request received to save user: ' + user.name);
        let userRepo = connection.getRepository(User);
        let userToSave: User = await userRepo.findOne({email: user.email});
        if (!userToSave) {
            userToSave = new User();
            userToSave.name = user.name;
            userToSave.email = user.email;
            await userToSave.save();

            return JSON.stringify(userToSave);
        } else {
            throw new Error(`User with email address ${user.email} already exists`);
        }
    }
}