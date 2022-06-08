import { ApiService } from "./ApiService";
import { IUsuario } from "@interfaces/IUsuario";

export class UsuarioService extends ApiService {
  public async list(params?: { id: number }): Promise<IUsuario> {
    return this.get('/usuario');
  }
  
  public async save(data: IUsuario): Promise<IUsuario> {
    return this.post('/usuario', data);
  }

  public async remove(params: { id: number }): Promise<IUsuario> {
    return this.delete('/usuario', params);
  }
}