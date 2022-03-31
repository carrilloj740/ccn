import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevaComponent } from '../nueva/nueva.component';
import { SeguimientoComponent } from '../seguimiento/seguimiento.component';

import { InicioComponent } from './inicio.component';


const routes: Routes = [
{path:'', component: InicioComponent, children:[
  {path: 'nueva', component: NuevaComponent},
  {path: 'seguimiento', component: SeguimientoComponent},
]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
