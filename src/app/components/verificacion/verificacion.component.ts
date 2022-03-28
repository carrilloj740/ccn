
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-verificacion',
  templateUrl: './verificacion.component.html',
  styleUrls: ['./verificacion.component.css'],

})

export class VerificacionComponent implements OnInit {

  form: FormGroup;
  loading: boolean | undefined;
  login= "/login"
  formBuilder: any;
  constructor(private fb : FormBuilder,private snackBar: MatSnackBar, private router: Router,@Inject(DOCUMENT) private document: Document) { 
    
    this.form = new FormGroup({
      day: new FormControl(),
      month: new FormControl(),
      year: new FormControl(),
    })
    
  }
  
  
  openSnackBar(mensaje: string){
    this.snackBar.open(mensaje,'',{
      duration: 3000
    });
    
  } 

  validar(){
    console.log(this.form.value);
  }
  
  
  ngOnInit(): void {
    
  }

  fakeLoading(){
    this.loading = true;
    setTimeout(() => {
      
      this.router.navigate(['login']);
    }, 1500);
  }

  getErrorMessage() {
    if (this.form.hasError('required')) {
      return 'You must enter a value';
    }

    return this.form.hasError('email') ? 'Not a valid age' : '';
  }
  
  
}

