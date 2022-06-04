import {
  Entity,
  PrimaryGeneratedColumn,
  Index,
  Column,
  CreateDateColumn,
  Timestamp,
  ManyToOne,
} from "typeorm"
import { SituacaoManifestacao } from "../enums/SituacaoManifestacao";
import { TipoManifestacao } from "../enums/TipoManifestacao";
import { EstacaoMetro } from "./EstacaoMetro";
import { Usuario as Usuario } from "./Usuario";

@Entity()
export class Manifestacao {
  @Index()
  @PrimaryGeneratedColumn()
  codigo: number;

  @ManyToOne(() => Usuario, (usuario) => usuario)
  usuario: Usuario;

  @Column({ type: "enum", enum: TipoManifestacao, default: TipoManifestacao.ELOGIO })
  tipoManifestacao: TipoManifestacao;

  @Column()
  descricao: string;

  @ManyToOne(() => EstacaoMetro, (estacaoMetro) => estacaoMetro)
  estacaoMetroCodigo: EstacaoMetro;

  @CreateDateColumn()
  criadaEm: Timestamp;

  @Column({ type: "enum", enum: SituacaoManifestacao, default: SituacaoManifestacao.EM_ANDAMENTO })
  situacaoManifestacao: SituacaoManifestacao;
}
