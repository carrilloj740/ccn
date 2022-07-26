import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../components/nueva/Product';
import { ApiService } from './api.service';


export interface Orden {
  sku: any;
  description: any;
  etd: any;
  quantity: any;
  typeContainer: any;
  quantityContainer: any;
}

@Injectable({
  providedIn: 'root',
  
})

export class AddService {
  productos: any[];
  private productos$: Subject<any[]>;

  constructor(private apiService: ApiService) {
    this.productos = [];
    this.productos$ = new Subject();
  }


  async agregarProducto(shoppingCartId: any, producto: Product, etd: any) {
    producto["etd"] = etd
    this.productos.push(producto);
    this.productos$.next(this.productos);
    console.log(shoppingCartId, producto.id,producto.quantity)
    this.apiService.postShoppingCartItem(shoppingCartId, producto.id, producto.quantity).subscribe({
      next: (data: any) => {
        console.log(data)
        return true;
      },
      error: (err: any) => {
        console.log(err)
      }}
     
    )
  }

  getProductos(): Observable<Product[]> {
    return this.productos$.asObservable();
  }



}