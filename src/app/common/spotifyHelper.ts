import { addMilliseconds, format } from "date-fns";
import { IArtista } from "../interfaces/iArtista";
import { IMusica } from "../interfaces/iMusica";
import { IPlaylist } from "../interfaces/iPlaylist";
import { IUsuario } from "../interfaces/IUsuario";
import { newMusica, newPlaylist } from "./factories";


export function spotifyUserParaUsuarop(user: SpotifyApi.CurrentUsersProfileResponse): IUsuario {
    return {
        id: user.id,
        nome: user.display_name,
        imagemUrl: user.images[0].url
    }
}

export function spotifyPlaylistParaPlaylist(playlist: SpotifyApi.PlaylistObjectSimplified): IPlaylist {
    return {
        id: playlist.id,
        nome: playlist.name,
        imagemUrl: playlist.images[0].url
    }
}

export function SpotifySinglePlaylistParaPlaylist(playlist: SpotifyApi.SinglePlaylistResponse): IPlaylist {

  if(!playlist) {
    return newPlaylist();
  }


    return {
        id: playlist.id,
        nome: playlist.name,
        imagemUrl: playlist.images.shift().url,
        musicas:[]
    }
}

export function SpotifyArtistaParaArtista(artista: SpotifyApi.ArtistObjectFull): IArtista {
    return {
        id: artista.id,
        nome: artista.name,
        imagemUrl: artista.images[0].url
    }
}


export function spotifyTrackParaMusica(track: SpotifyApi.TrackObjectFull): IMusica {
if(!track) {
    return newMusica();
}

    const msParaMinutos = (ms: number)=>{
        const data = addMilliseconds(new Date(0), ms);
        return format(data, 'mm:ss');
    }
    return {
        id: track.uri,
        album: {
            id: track.album.id,
            nome: track.album.name,
            imagemUrl: track.album.images.shift().url
        },
        artistas: track.artists.map(artista =>({ 
            id: artista.id,
            nome: artista.name
        })),
        tempo:msParaMinutos(track.duration_ms),
        titulo:track.name,
    }
}