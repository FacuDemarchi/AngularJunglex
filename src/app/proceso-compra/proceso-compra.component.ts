// proceso-compra.component.ts
import { Component } from '@angular/core';
import { PedidosService } from '../pedidos.service';

@Component({
  selector: 'app-proceso-compra',
  templateUrl: './proceso-compra.component.html',
  styleUrls: ['./proceso-compra.component.css']
})
export class ProcesoCompraComponent {
  datosEnvio: any = {};
  metodoPago: string = '';

  constructor(private pedidosService: PedidosService) { }

  finalizarCompra() {
    // Lógica para finalizar la compra y enviar los datos al servicio de pedidos
    this.pedidosService.crearPedido(this.datosEnvio, this.metodoPago);
  }
}