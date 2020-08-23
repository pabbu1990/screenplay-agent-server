import { BaseEntity } from 'typeorm';
import { Script } from "./Script";
export declare class User extends BaseEntity {
    id: number;
    name: string;
    email: string;
    script: Script[];
}
