
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-verificacion',
  templateUrl: './verificacion.component.html',
  styleUrls: ['./verificacion.component.css']
})
export class VerificacionComponent implements OnInit {
  form: FormGroup;

  minDate: Date | undefined;
  maxDate: Date | undefined;
  loading: boolean | undefined;
  login= "/login"
  constructor(private fb : FormBuilder,private snackBar: MatSnackBar, private router: Router,@Inject(DOCUMENT) private document: Document) { 
    
    this.form= this.fb.group({
      Date: new FormControl()

    })
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 90, 0, 1);
    this.maxDate = new Date(currentYear - 18, 11, 20);
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
  
}

