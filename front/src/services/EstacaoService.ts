import { ApiService } from "./ApiService";
import { IEstacaoMetro } from "@interfaces/IEstacaoMetro";

export class EstacaoService extends ApiService {
  public async list(params?: { id: number }): Promise<IEstacaoMetro[]> {
    return this.get('/estacao-metro');
  }
  
  public async save(data: IEstacaoMetro): Promise<IEstacaoMetro> {
    return this.post('/estacao-metro', data);
  }

  public async remove(params: { id: number }): Promise<IEstacaoMetro> {
    return this.delete('/estacao-metro', params);
  }
}