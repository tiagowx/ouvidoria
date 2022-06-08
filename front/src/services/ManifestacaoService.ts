import { ApiService } from "./ApiService";
import { IManifestacao } from "@interfaces/IManifestacao";

export class ManifestacaoService extends ApiService {
  public async list(params?: { id: number }): Promise<IManifestacao[]> {
    return this.get('/manifestacoes');
  }
  
  public async save(data: IManifestacao): Promise<IManifestacao> {
    return this.post('/manifestacoes', data);
  }

  public async remove(params: { id: number }): Promise<IManifestacao> {
    return this.delete('/manifestacoes', params);
  }
}