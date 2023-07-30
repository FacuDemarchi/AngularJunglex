// home.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  comerciosDestacados: any[] = [
    { nombre: 'Comercio 1' },
    { nombre: 'Comercio 2' },
    { nombre: 'Comercio 3' }
  ];

  productosDestacados: any[] = [
    { nombre: 'Producto 1' },
    { nombre: 'Producto 2' },
    { nombre: 'Producto 3' }
  ];
}
