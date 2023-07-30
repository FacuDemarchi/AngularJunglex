// comercios.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComerciosService {
  getComercios(): any[] {
    // Lógica para obtener la lista de comercios desde el backend o datos de ejemplo
    return [
      { nombre: 'Comercio 1', direccion: 'Dirección 1', telefono: '123456789' },
      { nombre: 'Comercio 2', direccion: 'Dirección 2', telefono: '987654321' },
      { nombre: 'Comercio 3', direccion: 'Dirección 3', telefono: '567891234' }
    ];
  }
}
