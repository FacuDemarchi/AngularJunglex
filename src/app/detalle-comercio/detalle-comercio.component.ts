// detalle-comercio.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-comercio',
  templateUrl: './detalle-comercio.component.html',
  styleUrls: ['./detalle-comercio.component.css']
})
export class DetalleComercioComponent {
  @Input() comercio: any;
}
