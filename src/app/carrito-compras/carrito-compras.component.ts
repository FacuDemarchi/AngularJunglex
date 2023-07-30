// carrito-compras.component.ts
import { Component, OnInit } from '@angular/core';
import { CarritoComprasService } from '../carrito-compras.service';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {
  listaProductos: any[] = [];

  constructor(private carritoService: CarritoComprasService) { }

  ngOnInit() {
    this.listaProductos = this.carritoService.getProductos();
  }
}
