export const environment = {   
    production: false
};

export const audioPlayerConfiguration = {
    apiEnd:'https://api.spotify.com/v1/',
    clientId:'1049526abaf4487ba193ff41d6001287',
    authEndPoint:'https://accounts.spotify.com/authorize',
    redirectUri:'http://localhost:4200/login/',
    scopes: [
      'user-read-currently-playing', //musica tocando
      'user-read-recently-played', //ler musicas recentes
      'user-read-playback-state', //ler estado do player do usuario
      'user-top-read', //ler top musicas e artistas do usuario
      'user-modify-playback-state', //controlar player do usuario
      'user-library-read', //ler biblioteca do usuario
      'playlist-read-private', //ler playlist privada do usuario
      'playlist-read-collaborative' //ler playlist colaborativa do usuario
    ],
};