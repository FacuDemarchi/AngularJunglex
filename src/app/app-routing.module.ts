import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComerciosComponent } from './comercios/comercios.component';
import { DetalleComercioComponent } from './detalle-comercio/detalle-comercio.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'comercios', component: ComerciosComponent },
  { path: 'comercios/:id', component: DetalleComercioComponent },
  { path: 'perfil', component: PerfilUsuarioComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redireccionar a la página principal para cualquier ruta no válida
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
