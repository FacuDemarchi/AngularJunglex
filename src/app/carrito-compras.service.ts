// carrito-compras.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoComprasService {
  listaProductos: any[] = [];

  agregarProducto(producto: any) {
    // Lógica para agregar un producto al carrito
    this.listaProductos.push(producto);
  }

  getProductos(): any[] {
    // Lógica para obtener la lista de productos del carrito
    return this.listaProductos;
  }
}
