import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarios: any[] = []; // Supongamos que aquí se almacenan los usuarios registrados

  constructor() { }

  // Método para registrar un nuevo usuario
  registrarUsuario(nombre: string, correo: string, contrasena: string): void {
    const nuevoUsuario = { nombre, correo, contrasena };
    this.usuarios.push(nuevoUsuario);
  }

  // Método para obtener la información del usuario por su ID (suponiendo que se almacene el ID)
  obtenerUsuarioPorId(idUsuario: string): any {
    return this.usuarios.find(usuario => usuario.id === idUsuario);
  }

  // Método para obtener la información del usuario por su correo electrónico (suponiendo que el correo sea único)
  obtenerUsuarioPorCorreo(correo: string): any {
    return this.usuarios.find(usuario => usuario.correo === correo);
  }

  // Método para actualizar la información de un usuario
  actualizarInformacionUsuario(nombre: string, correo: string): void {
    // Supongamos que aquí se actualiza la información del usuario en el arreglo this.usuarios
    // Puedes agregar la lógica necesaria para guardar los cambios en una base de datos u otro almacenamiento persistente.
  }
}
