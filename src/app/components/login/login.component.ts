import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  hide = true;
  form: FormGroup
  loading: boolean | undefined;

  constructor(
   
    private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router,private apiService: ApiService) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],

    })
  }

  ingresar() {
    console.log(this.form.value);
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if (usuario == 'admin' && password == 'admin') {
      //Redireccionamos al dashboard
      this.fakeLoading();
    } else {
      //Mostramos un mensaje de error;
      this.error();
      this.form.reset();
    }
  }

  error() {
    this._snackBar.open('Usuario o contraseña son invalidas', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  fakeLoading() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['inicio'])
    }, 1500);
    this.apiService.getAccountInfo().subscribe((account: any) => {
      console.log(account)
    })
  }

  getAntiCSRFToken() {
    this.apiService.getAntiCSRFToken().subscribe((res:any) => {
      this.apiService.anticsrfToken = res.xsrftoken
      console.log(res)
      this.apiService.getOracleLogin(res.xsrftoken).subscribe((res:any)=>{
        console.log(res)
      })
    })
  }

  ngOnInit(): void {
    sessionStorage.setItem("partyNumber","1Yp")
    this.getAntiCSRFToken()
  }

}