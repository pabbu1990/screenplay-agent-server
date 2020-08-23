import { BaseEntity } from 'typeorm';
import { User } from "./User";
export declare class Script extends BaseEntity {
    id: number;
    name: string;
    logLine?: string;
    user: User;
}
