import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Script extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public name: string;
}