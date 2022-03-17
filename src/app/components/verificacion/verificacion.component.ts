
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-verificacion',
  templateUrl: './verificacion.component.html',
  styleUrls: ['./verificacion.component.css']
})
export class VerificacionComponent implements OnInit {
  
  loading: boolean | undefined;
  login= "/login"
  constructor(private snackBar: MatSnackBar, private router: Router,@Inject(DOCUMENT) private document: Document) { }

  openSnackBar(mensaje: string){
    this.snackBar.open(mensaje,'',{
      duration: 3000
    });
    
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

