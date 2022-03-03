import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


export interface Orden{
  sku: any;
  description: string;
  etd: Date;
  email:string;
  quantity: string;
  typeContainer: string;
  quantityContainer: number;

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