import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppConstants {
    public PUERTO = "5000"
    public URL_PROVINCIAS = "https://morning-sierra-17122.herokuapp.com/provincias/";
    public URL_MUNICIPIOS = "https://morning-sierra-17122.herokuapp.com/municipios/";
    public URL_TIEMPOPROVINCIA = "https://morning-sierra-17122.herokuapp.com/tiempoprovincia/";
    public URL_TIEMPOMUNICIPIO = "https://morning-sierra-17122.herokuapp.com/tiempomunicipio/";
    public URL_TIEMPOPROVINCIASFECHA = "https://morning-sierra-17122.herokuapp.com/tiempoprovinciaFecha/";
    public URL_TIEMPOMUNICIPIOFECHA = "https://morning-sierra-17122.herokuapp.com/tiempomunicipioFecha/";
}