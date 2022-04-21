import { Injectable } from '@angular/core';
import { Buffer } from 'buffer';

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})




export class ApiService {

  private url = "https://fa-euny-test-saasfaprod1.fa.ocs.oraclecloud.com/crmRestApi/resources/11.13.18.05/"; // URL to web api

 private username = "jorge.argibay@serkes1.com";
 private password = "Anik2580";
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

  getAddressAccount(): any{
    return this.http.get(this.url+ "accounts/" + (this.partyNumber) + "/child/Address/",{
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

  getPrice(priceBook : number): any {
    return this.http.get(this.url + "priceBookHeaders/" + priceBook +"/child/PriceBookItem", {
      headers: { 'Authorization': this.auth, 'Content-Type': "application/vnd.oracle.adf.resourcecollection+json"},
    });
  }
  getPriceList(priceBook: number): any {
    return this.http.get(this.url + "priceBookHeaders/" + priceBook , {
      headers: { 'Authorization': this.auth, 'Content-Type': "application/vnd.oracle.adf.resourcecollection+json"},
    });
  }

}
