import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Script} from "./Script";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public name: string;
    @Column()
    public email: string;
    @OneToMany(type => Script, script => script.user, {cascade: true})
    public script: Script[]
}