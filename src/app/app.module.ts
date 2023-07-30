import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { ComerciosComponent } from './comercios/comercios.component';
import { DetalleComercioComponent } from './detalle-comercio/detalle-comercio.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
import { ProcesoCompraComponent } from './proceso-compra/proceso-compra.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    ComerciosComponent,
    DetalleComercioComponent,
    CarritoComprasComponent,
    ProcesoCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
