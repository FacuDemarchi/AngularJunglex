// comercios.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ComerciosService {
  private apiUrl = 'https://tu-api.com/comercios'; // Crear e implementar api

  constructor(private http: HttpClient) {}
  
  obtenerListaComercios() {
    return this.http.get(this.apiUrl);
  }

  obtenerDetalleComercio(id: any) {
  }
}
