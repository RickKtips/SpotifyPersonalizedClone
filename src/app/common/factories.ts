import { IArtista } from "../interfaces/iArtista";
import { IMusica } from "../interfaces/iMusica";
import { IPlaylist } from "../interfaces/iPlaylist";

export function newArtista():IArtista{
    return {
        id: '',
        nome: 'Artista',
        imagemUrl: '',
        musicas: []
    }
}

export function newMusica(): IMusica{
    return {
        id: '',
        album: {
            id: '',
            nome: 'Album',
            imagemUrl: ''
        },
        artistas:[],
        tempo:'',
        titulo:'',
    }
}

export function newPlaylist(): IPlaylist{
    return {
        id: '',
        nome: 'Playlist',
        imagemUrl: '',
        musicas: []
    }
}   