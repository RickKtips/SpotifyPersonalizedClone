import { Injectable } from '@angular/core';
import { audioPlayerConfiguration } from 'src/environments/environment';
import SpotifyWebApi from 'spotify-web-api-js';

import { 
  SpotifyArtistaParaArtista, 
  spotifyPlaylistParaPlaylist, 
  spotifyTrackParaMusica,
  spotifyUserParaUsuarop,
  SpotifySinglePlaylistParaPlaylist

 } from '../common/spotifyHelper';
import { IUsuario } from '../interfaces/IUsuario';
import { IPlaylist } from '../interfaces/iPlaylist';
import { Router } from '@angular/router';
import { IArtista } from '../interfaces/iArtista';
import { IMusica } from '../interfaces/iMusica';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  spotifyApi: SpotifyWebApi.SpotifyWebApiJs = null;
  usuario: IUsuario = null;

  constructor(private router: Router) {
    this.spotifyApi = new SpotifyWebApi();
   }

   async inicializarUsuario(){
    if(!!this.usuario){ return true;}

    const token = localStorage.getItem('token');
    if(!token) { return false;}

    try{
    this.definirAccessToken(token);
    await this.obterSpotifyUsuario();
    return !!this.usuario;

    } catch(error) {
      return false;
    }
   }

  async obterSpotifyUsuario() {
    const userInfo = await this.spotifyApi.getMe(); 
    this.usuario = spotifyUserParaUsuarop(userInfo);
    console.dir(userInfo, { depth: null });

  }

  obterUrlLogin() {
    const authEndPoint = `${audioPlayerConfiguration.authEndPoint}`;
    const clientId = `client_id=${audioPlayerConfiguration.clientId}&`;
    const redirect_url = `redirect_uri=${audioPlayerConfiguration.redirectUri}&`;
    const scopes = `scope=${audioPlayerConfiguration.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    return `${authEndPoint}?${clientId}${redirect_url}${scopes}${responseType}`;
  }

obterTokenUrlCallback() { 
  if(!window.location.hash) {
    return '';
  }
  const params = window.location.hash.substring(1).split('&');
  return params[0].split('=')[1];
}
  definirAccessToken(token: string) { 
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token', token);
  }

  async buscarPlaylistUsuario(offset = 0, limit = 10): Promise<IPlaylist[]> {
    const playlists = await this.spotifyApi.getUserPlaylists(this.usuario.id, { offset, limit });
    return playlists.items.map(spotifyPlaylistParaPlaylist);
  }

  async buscarMusicasPlaylist(playlistId: string, offset = 0, limit = 50){
    const playlists = await this.spotifyApi.getPlaylist(playlistId);
    if(!playlists) { return null;}

    const playlist = SpotifySinglePlaylistParaPlaylist(playlists);
    const musicas = await this.spotifyApi.getPlaylistTracks(playlistId, { offset, limit });
    playlist.musicas = musicas.items.map(x => spotifyTrackParaMusica(x.track as SpotifyApi.TrackObjectFull));

return playlist;    
  }

  async buscarTopArtistas(limit=10): Promise<IArtista[]> {
  const artistas = await this.spotifyApi.getMyTopArtists({limit});
  return artistas.items.map(SpotifyArtistaParaArtista);

  }

async buscarMusicas(offset=0, limit=50): Promise<IMusica[]> {
const musicas = await this.spotifyApi.getMySavedTracks({offset, limit});
return musicas.items.map(x => spotifyTrackParaMusica(x.track));
}

async executarMusica(musicaId: string) {  
  await this.spotifyApi.queue(musicaId);
  await this.spotifyApi.skipToNext(); 
}

async obterMusicaAtual(): Promise<IMusica> {
  const musica = await this.spotifyApi.getMyCurrentPlayingTrack();
  return spotifyTrackParaMusica(musica.item);
}

async voltarMusica() {  
  await this.spotifyApi.skipToPrevious();
}

async proximaMusica() {
  await this.spotifyApi.skipToNext();
}

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
