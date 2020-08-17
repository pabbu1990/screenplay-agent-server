import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Script {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public name: string;
}

export default Script;