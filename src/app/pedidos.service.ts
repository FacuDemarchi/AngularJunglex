// pedidos.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  crearPedido(datosEnvio: any, metodoPago: string) {
    // Lógica para crear un nuevo pedido y enviarlo al backend
    console.log('Pedido creado:', datosEnvio, 'Método de Pago:', metodoPago);
  }
}
