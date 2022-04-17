import { Card } from "src/cards/entities/card.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;
    
    @Column()
    name: string;

    @Column()
    password: string;

    @Column({default: 0.0})
    balance: number;

    @OneToOne(()=>Card, card => card.user)
    card: Card
}
