import {Column, Entity, PrimaryGeneratedColumn, BaseEntity} from "typeorm";

@Entity()
export class Script extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public name: string;
}

export default Script;