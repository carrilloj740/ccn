import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { NuevaComponent } from './components/nueva/nueva.component';
import { SeguimientoComponent } from './components/seguimiento/seguimiento.component';
import { VerificacionComponent } from './components/verificacion/verificacion.component';

const routes: Routes = [
  {path: '', redirectTo: 'verificacion', pathMatch: 'full'},
  {path:'verificacion', component: VerificacionComponent},
  {path:'login', component: LoginComponent },
  {path:'forgotPassword', component: ForgotPasswordComponent },
  {path: "inicio", loadChildren:()=>import('./admin/admin.module')
  .then(mod=>mod.AdminModule)},
  { path:'**', redirectTo: 'verificacion', pathMatch: 'full'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }