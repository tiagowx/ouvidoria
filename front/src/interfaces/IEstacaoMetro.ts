import { LinhaMetro } from "../enums/LinhaMetro";
export interface IEstacaoMetro {
  codigo?: number;
  nome: string;
  linhaMetro: LinhaMetro;
}