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
 private auth = "Basic " + btoa(this.username + ":" + this.password)
 private partyNumber = sessionStorage.getItem('partyNumber')
 
  constructor(private http: HttpClient) {
    console.log('Servicio http');
  }

  getItems(): any {
    return this.http.get(this.url + "products", {
      headers: { 'Authorization': this.auth, 'Content-Type': "application/vnd.oracle.adf.resourcecollection+json"},
    });
  }


  getAccountInfo(): any{
    return this.http.get(this.url+ "accounts/" + (this.partyNumber),{
      headers: { 'Authorization': this.auth, 'Content-Type': "application/vnd.oracle.adf.resourcecollection+json"},
    })
  }

  getShoppingCart(): any {
    return this.http.get(this.url + "__ORACO__ShoppingCart_c", {
      headers: { Authorization: this.auth},
    });
  }

  postShoppingCart(): any {
    return this.http.post(this.url + "__ORACO__ShoppingCart_c", {
      headers: { Authorization: this.auth, },
    });
  }
}
