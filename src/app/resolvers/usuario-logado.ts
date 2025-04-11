import { inject } from "@angular/core";
import { SpotifyService } from "../services/spotify.service";
import { Router } from "@angular/router";

export const usuarioLogadoResolver = () => new Promise<void>(async (res: any, rej: any ) => {
    
const spotifyService = inject(SpotifyService);
const router = inject(Router);

const naoAutenticado = () => {  
    localStorage.clear();
    router.navigate(['/login']);
    rej('Usuario não autenticado')
    return false;
}


const token = localStorage.getItem('token');

if(!token){
    return naoAutenticado();
}

const usuarioCriado = await spotifyService.inicializarUsuario();
if(usuarioCriado){
    res(true);
} else{
    res(naoAutenticado()); 
    
}
return false

});
