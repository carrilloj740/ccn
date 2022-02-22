import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


export interface Orden{
  sku: number;
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

   agregarOrdenes$(pOrdenes: Orden){
     this.ordenes.push(pOrdenes);
     this.ordenes$.next(this.ordenes);

   }

   getOrdenes$(): Observable<Orden[]>{
     return this.ordenes$.asObservable();
   }
}