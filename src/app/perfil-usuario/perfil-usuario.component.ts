import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {
  userData: any; // Supongamos que esto es la información del usuario obtenida del servicio
  nombreUsuario: string = "";
  correoUsuario: string = "";

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    // Obtener la información del usuario al iniciar el componente
    this.userData = this.usuarioService.obtenerUsuarioPorCorreo(this.correoUsuario);
    this.nombreUsuario = this.userData.nombre;
    this.correoUsuario = this.userData.correo;
  }

  actualizarPerfil(): void {
    // Llamar al servicio para actualizar la información del usuario
    this.usuarioService.actualizarInformacionUsuario(this.nombreUsuario, this.correoUsuario);
  }
}

