import { Injectable } from '@angular/core';
import { Buffer } from 'buffer';

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})




export class ApiService {

  private url = "https://fa-euny-test-saasfaprod1.fa.ocs.oraclecloud.com/crmRestApi/resources/11.13.18.05/"; // URL to web api

 private username = "roberto.chamorro@ccn.com.ni";
 private password = "01CNN2021";
 private auth = "Basic" + btoa(this.username + ":" + this.password)
 private partyNumber = sessionStorage.getItem('partyNumber')
 
  constructor(private http: HttpClient) {
    console.log('Servicio http');
  }

  getItems(): any {
    return this.http.get(this.url + "products", {
      headers: { Authorization: this.auth, },
    });
  }


  getAccountInfo(): any{
    return this.http.get(this.url+ "accounts/" + (this.partyNumber),{
      headers: {Authorization: this.auth},
    })
  }

}
