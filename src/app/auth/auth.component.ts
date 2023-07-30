// auth.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent {
  login: any = {};
  register: any = {};

  loginUser() {
    // Lógica para enviar los datos de inicio de sesión al backend
    // Aquí puedes realizar una petición HTTP con HttpClient
    console.log('Iniciar Sesión:', this.login);
  }

  registerUser() {
    // Lógica para enviar los datos de registro al backend
    // Aquí puedes realizar una petición HTTP con HttpClient
    console.log('Registro:', this.register);
  }
}
