import { Injectable } from '@angular/core';
import { Buffer } from 'buffer';

import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})



export class UsersService {



  constructor(private http: HttpClient) {
    console.log('Servicio http');
  }


  getProducts(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('username:password')
      })
    }
  }
}
