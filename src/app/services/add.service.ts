import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../components/nueva/Product';
import { TableComponent } from '../table/table.component';


export interface Orden{
  sku: any;
  description: any;
  etd: any;
  quantity: any;
  typeContainer: any;
  quantityContainer: any;
}

@Injectable({
  providedIn: 'root'
})

export class AddService {

  
  productos: any[];
  private productos$: Subject<any[]>;

  constructor() { 
    this.productos = [];
    this.productos$ = new Subject();
   } 

   
  agregarProducto(producto: Product, etd: any) {
    console.log(producto)
    producto["etd"] = etd
    this.productos.push(producto);
    this.productos$.next(this.productos);
  }

   getProductos(): Observable<Product[]>{
     return this.productos$.asObservable();
   }

   

}