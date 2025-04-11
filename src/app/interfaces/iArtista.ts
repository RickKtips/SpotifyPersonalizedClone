import { IMusica } from "./iMusica";

export interface IArtista{
 id: string;
 nome: string;
 imagemUrl?: string;
 musicas?: IMusica[];
}