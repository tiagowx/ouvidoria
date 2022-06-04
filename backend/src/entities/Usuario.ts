import { Entity, PrimaryGeneratedColumn, Index, Column, Unique, OneToMany } from "typeorm"
import { Manifestacao } from "./Manifestacao";

@Entity()
@Unique(["cpf", "email"])
export class Usuario {
    @Index()
    @PrimaryGeneratedColumn()
    codigo: number;

    @Column()
    nomeCompleto: string;

    @Column()
    email: string;

    @Column()
    telefone: string;

    @Column()
    cpf: string;

}
