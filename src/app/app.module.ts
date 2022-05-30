import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from './material/material.module';
import { NuevaComponent } from './components/nueva/nueva.component';
import { SeguimientoComponent } from './components/seguimiento/seguimiento.component';
import { LoginComponent } from './components/login/login.component';
import { VerificacionComponent } from './components/verificacion/verificacion.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { DetailsComponent } from './details/details.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    NuevaComponent,
    SeguimientoComponent,
    LoginComponent,
    VerificacionComponent,
    TableComponent,
    DetailsComponent,
    ForgotPasswordComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
 
  ],
  providers: [
  TableComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
  constructor() {
  }
}
