import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public name: string;
    @Column()
    public email: string;
}