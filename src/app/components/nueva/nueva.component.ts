import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  sku: number;
  producto: string;
  etd: number;
  cantidad: number;
  contenedor:string;
  shipment: string;
  icon: string;
  contenedors: number
}

const ELEMENT_DATA: PeriodicElement[] = [
  {sku: 113320, cantidad: 288,icon:'icon',contenedors:14,contenedor:'Truck',producto: 'HE 355K2Emb', etd: 1.0079, shipment: 'Truck'},
  {sku: 223456,cantidad: 1235,icon:'icon',contenedors:56,contenedor:'Truck', producto: 'HE 355Ti 4x6', etd: 4.0026, shipment: 'Truck'},

];


@Component({
  selector: 'app-nueva',
  templateUrl: './nueva.component.html',
  styleUrls: ['./nueva.component.css']
})
export class NuevaComponent implements OnInit {
  
  displayedColumns: string[] = ['sku','producto','etd','shipment','contenedors','contenedor','cantidad', 'icon'];
  dataSource = ELEMENT_DATA;



  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
