import {User} from "../entities/User";

export class UserController {
    constructor() {
    }

    public static async getAllUsers() {
        console.log('request received to get all users');
        return await User.find();
    }

    public static async saveUser(user: User) {
        console.log('request received to save user: ' + user.name);
        let userToSave = new User();
        userToSave.name = user.name;
        userToSave.email = user.email;
        await userToSave.save();

        return JSON.stringify(userToSave);
    }
}