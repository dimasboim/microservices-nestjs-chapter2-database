import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class books {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    title:string;
    

    @Column()
    author:string;
   

    @Column()
    rating:number;
}