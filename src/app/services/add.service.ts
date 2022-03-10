import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


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

  
  private ordenes: Orden[];
  private ordenes$: Subject<Orden[]>;

  constructor() { 
    this.ordenes = [];
    this.ordenes$ = new Subject();
   } 

   
  agregarOrdenes$(pOrdenes: Orden) {
    const sku = pOrdenes.sku.Name + "/" + pOrdenes.sku.Description
    const split = sku.split("/")
    console.log(split)
    pOrdenes.sku = split[0]
    pOrdenes.description = split[1]
    console.log(pOrdenes)

    this.ordenes.push(pOrdenes);
    this.ordenes$.next(this.ordenes);

  }

   getOrdenes$(): Observable<Orden[]>{
     return this.ordenes$.asObservable();
   }

}