import { Injectable } from '@angular/core';
import { Buffer } from 'buffer';

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})




export class ApiService {
  shoppingCartId(shoppingCartId: any) {
    throw new Error('Method not implemented.');
  }

  public account = {} as any;
  private url = "https://fa-euny-test-saasfaprod1.fa.ocs.oraclecloud.com/crmRestApi/resources/11.13.18.05/"; // URL to web api
  private username = "jorge.argibay@serkes1.com";
  private password = "Anik2580";
  //private auth = "Basic " + btoa(this.username + ":" + this.password)
  private auth = "";
  private partyNumber = sessionStorage.getItem('partyNumber')
  private contenedor = {
    "EMPID": 4,
    "TPCON": "T",
    "CODCON": 1,
    "TXTCON": "T1",
    "LMTMINP": 200,
    "LMTMAXP": 400,
    "LMTMINV": 20,
    "LMTMAXV": 40,
    "LMTMINB": 10,
    "LMTMAXB": 20,
    "CMBMINP": 4,
    "CMBMAXP": 8
  }

  constructor(private http: HttpClient) {
    console.log('Servicio http');
  }


  getItems(): any {
    return this.http.get(this.url + "products", {
      headers: { 'Authorization': this.auth, 'Content-Type': "application/vnd.oracle.adf.resourcecollection+json" },
    });
  }

  getAccountInfo(): any {
    return this.http.get(this.url + "accounts/" + (this.partyNumber), {
      headers: { 'Authorization': this.auth, 'Content-Type': "application/vnd.oracle.adf.resourcecollection+json" },
    })
  }

  getAccountChange(): any {
    return this.http.get(this.url + "accounts/" + (this.partyNumber) + "/child/Relationship/", {
      headers: { 'Authorization': this.auth, 'Content-Type': "application/vnd.oracle.adf.resourcecollection+json" },
    })
  }

  getListAddress(): any {
    return this.http.get(this.url + "accounts/" + (this.partyNumber) + "/child/Address/", {
      headers: { 'Authorization': this.auth, 'Content-Type': "application/vnd.oracle.adf.resourcecollection+json" },
    })
  }

  getShoppingCartItems(shoppingCartId: any) {
    return this.http.get(this.url + "__ORACO__ShoppingCartDSD_c/" + (shoppingCartId) + "/child/__ORACO__ShoppingCartItemCollection_c", {
      headers: { 'Authorization': this.auth },
    });
  }

  postShoppingCartItem(shoppingCartId: any, productoId: any, cantidad: any): any {
    const body = {
      "__ORACO__Product_Id_c": productoId,
      "__ORACO__Quantity_c": cantidad
    }
    return this.http.post(this.url + "__ORACO__ShoppingCartDSD_c/" + (shoppingCartId) + "/child/__ORACO__ShoppingCartItemCollection_c", body, {
      headers: { 'Authorization': this.auth },
    });
  }

  getPrice(priceBook: number): any {
    return this.http.get(this.url + "priceBookHeaders/" + priceBook + "/child/PriceBookItem", {
      headers: { 'Authorization': this.auth, 'Content-Type': "application/vnd.oracle.adf.resourcecollection+json" },
    });
  }

  getPriceList(priceBook: number): any {
    return this.http.get(this.url + "priceBookHeaders/" + priceBook, {
      headers: { 'Authorization': this.auth, 'Content-Type': "application/vnd.oracle.adf.resourcecollection+json" },
    });
  }

  signin(form: FormGroup) {
    this.auth = "Basic " + btoa(form.value.usuario + ":" + form.value.password);
    console.log(this.auth)
    return this.http.get(this.url + "accounts/", {
      headers: { 'Authorization': this.auth,'Content-Type': "application/vnd.oracle.adf.resourcecollection+json" }
    })
  }


}
