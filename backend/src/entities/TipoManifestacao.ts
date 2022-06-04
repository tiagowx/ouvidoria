import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class TipoManifestacao {

  @PrimaryGeneratedColumn()
  codigo: number;

  @Column()
  descricao: string;

}