import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, Unique, Tree } from "typeorm";
import { LinhaMetro } from "../enums/LinhaMetro";

@Entity()
export class EstacaoMetro {

  @PrimaryGeneratedColumn()
  codigo: number;

  @Column()
  nome: string;

  @Column({ type: "enum", enum: LinhaMetro, default: LinhaMetro.LINHA_1 })
  linhaMetro: LinhaMetro;
}