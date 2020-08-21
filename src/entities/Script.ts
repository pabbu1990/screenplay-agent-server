import {BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn, JoinColumn} from 'typeorm';
import {User} from "./User";

@Entity()
export class Script extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public name: string;
    @OneToOne(() => User)
    @JoinColumn()
    public user: User;
}