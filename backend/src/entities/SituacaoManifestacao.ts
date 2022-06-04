import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class SituacaoManifestacao {

  @PrimaryGeneratedColumn()
  codigo: number;

  @Column()
  descricao: string;

}