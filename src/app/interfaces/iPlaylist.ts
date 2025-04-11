import { IMusica } from "./iMusica";

export interface IPlaylist {
    id: string;
    nome: string;
    imagemUrl: string;
    musicas?: IMusica[];
}