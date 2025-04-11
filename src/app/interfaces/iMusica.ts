import { IArtista } from "./iArtista";

export interface IMusica{
 id: string;
 titulo: string;
 artistas: IArtista[];
 album:{
    id: string;
    nome: string;
    imagemUrl: string;
 },
 tempo: string;
}