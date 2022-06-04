import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, Unique, Tree } from "typeorm";
import { LinhaMetro } from "../enums/LinhaMetro";

@Entity()
@Tree("materialized-path")
export class EstacaoMetro {

  @PrimaryGeneratedColumn()
  codigo: number;

  @Column()
  nome: string;

  @Column({type:"enum", enum:LinhaMetro})
  linhaMetro: LinhaMetro;
}