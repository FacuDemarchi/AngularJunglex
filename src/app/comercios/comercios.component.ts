// comercios.component.ts
import { Component, OnInit } from '@angular/core';
import { ComerciosService } from '../comercios.service';

@Component({
  selector: 'app-comercios',
  templateUrl: './comercios.component.html',
  styleUrls: ['./comercios.component.css']
})
export class ComerciosComponent implements OnInit {
  listaComercios: any[] = [];

  constructor(private comerciosService: ComerciosService) { }

  ngOnInit() {
    this.listaComercios = this.comerciosService.getComercios();
  }
}
