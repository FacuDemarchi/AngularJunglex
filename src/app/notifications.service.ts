import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {
  constructor(private snackBar: MatSnackBar) { }

  // Método para mostrar una notificación en la parte inferior de la pantalla
  mostrarNotificacion(mensaje: string): void {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 3000, // Duración de la notificación en milisegundos
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
}
