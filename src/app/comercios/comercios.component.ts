// comercios.component.ts
import { Component, OnInit } from '@angular/core';
import { ComerciosService } from '../comercios.service';

@Component({
  selector: 'app-comercios',
  templateUrl: './comercios.component.html',
  styleUrls: ['./comercios.component.css']
})
export class ComerciosComponent implements OnInit {
  Comercios: any[] = [];

  constructor(private comerciosService: ComerciosService) { }

  ngOnInit() {
    this.comerciosService.obtenerListaComercios().subscribe(
      (data: any) => {
        this.Comercios = data
      },
      (error: any) => {
        console.error('Error al obtener lista de comercios', error);
      }
    )
  }

  filtrarComerciosCategoria(categoia: any) {}

  filtrarComerciosTag(tag: any) {}
  
}
