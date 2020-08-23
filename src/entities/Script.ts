import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {User} from "./User";

@Entity()
export class Script extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public name: string;
    @Column({nullable: true})
    public logLine?: string;
    // @Column({
    //     type: 'bytea',
    //     nullable: true
    // })
    // public scriptContent?: Buffer;
    @ManyToOne(type => User, user => user.script)
    public user: User;
}