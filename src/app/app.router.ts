/**
 * New typescript file
 */
import { AdministradorviewComponent } from './administradorview/administradorview.component';
import { AltausuarioComponent } from './altausuario/altausuario.component';
import { ListadousuariosComponent } from './listadousuarios/listadousuarios.component';
import { ListadobicicletaComponent } from './listadobicicleta/listadobicicleta.component';
import { UsuariocreadoComponent } from './usuariocreado/usuariocreado.component';
import { UsuarioviewComponent } from './usuarioview/usuarioview.component';
import { AgregarestacionComponent } from './agregarestacion/agregarestacion.component';
import { RouterModule, Routes } from '@angular/router';
import { EstacioncreadaComponent } from './estacioncreada/estacioncreada.component';
import { ListadoestacionesComponent } from './listadoestaciones/listadoestaciones.component';
import { AgregarbicicletaComponent } from './agregarbicicleta/agregarbicicleta.component';
import { BicicletaagregadaComponent } from './bicicletaagregada/bicicletaagregada.component';

const routes: Routes = [
  { path: 'usuarioview', component: UsuarioviewComponent },
  { path: 'altausuario', component: AltausuarioComponent },
  { path: 'administradorview', component: AdministradorviewComponent },
  { path: 'listadousuarios', component: ListadousuariosComponent },
  { path: 'listadobicicleta', component: ListadobicicletaComponent },
  { path: 'usuariocreado/:id', component: UsuariocreadoComponent },
  { path: 'agregarestacion', component: AgregarestacionComponent},
  { path: 'estacioncreada/:id', component: EstacioncreadaComponent },
  { path: 'listadoestaciones' , component: ListadoestacionesComponent},
  { path: 'agregarbicicleta' , component: AgregarbicicletaComponent},
  { path: 'listadobicicleta' , component: ListadobicicletaComponent},
  { path: 'bicicletaagregada/:id' , component: BicicletaagregadaComponent},
];

export const routing = RouterModule.forRoot(routes);
