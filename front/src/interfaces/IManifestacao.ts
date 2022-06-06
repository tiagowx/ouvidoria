import { SituacaoManifestacao } from "../enums/SituacaoManifestacao";
import { TipoManifestacao } from "../enums/TipoManifestacao";

export interface IManifestacao {
  codigo?: number;
  usuarioCodigo: number;
  tipoManifestacao: TipoManifestacao;
  descricao: string;
  estacaoMetro: number;
  situacaoManifestacao: SituacaoManifestacao;
}