import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http'

import { AppComponent } from './app.component';
import { AltausuarioComponent } from './altausuario/altausuario.component';
import { AdministradorviewComponent } from './administradorview/administradorview.component';
import { UsuarioviewComponent } from './usuarioview/usuarioview.component';
import { routing } from './app.router';
import { FormsModule } from '@angular/forms';
import { ListadousuariosComponent } from './listadousuarios/listadousuarios.component';
import { LoggerService } from './logger.service';
import { UsuariomockserviceService } from './usuariomockservice.service';
import { UsuarioserviceService } from './usuarioservice.service';
import { ListadobicicletaComponent } from './listadobicicleta/listadobicicleta.component';
import { AgregarestacionComponent } from './agregarestacion/agregarestacion.component';
import { ListadoestacionesComponent } from './listadoestaciones/listadoestaciones.component';
import { AgregarbicicletaComponent } from './agregarbicicleta/agregarbicicleta.component';
import { DevolverbicicletaComponent } from './devolverbicicleta/devolverbicicleta.component';
import { RetirarbicicletaComponent } from './retirarbicicleta/retirarbicicleta.component';
import { UsuariocreadoComponent } from './usuariocreado/usuariocreado.component';
import { Router } from '@angular/router';
import { EstacioncreadaComponent } from './estacioncreada/estacioncreada.component';
import { EstacionserviceService } from './estacionservice.service';


@NgModule({
  declarations: [
    AppComponent,
    AltausuarioComponent,
    AdministradorviewComponent,
    UsuarioviewComponent,
    ListadousuariosComponent,
    ListadobicicletaComponent,
    AgregarestacionComponent,
    ListadoestacionesComponent,
    AgregarbicicletaComponent,
    DevolverbicicletaComponent,
    RetirarbicicletaComponent,
    UsuariocreadoComponent,
    AgregarestacionComponent,
    EstacioncreadaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  providers: [
              LoggerService,
    UsuariomockserviceService,
    UsuarioserviceService,
    EstacionserviceService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
