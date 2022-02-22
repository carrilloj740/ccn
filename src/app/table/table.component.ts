import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddService, Orden } from '../services/add.service';


export interface PeriodicElement {
  sku: string;
  description: string;
  etd: any;
  quantity: number;
  typeContainer: string
  quantityContainer: any,
}


const ELEMENT_DATA: PeriodicElement[] = [
  {sku: 'Hydrogen', etd: 1.0079,description: "description", quantity: 2, typeContainer: "truck", quantityContainer: 2},

];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})




export class TableComponent implements OnInit {

  
  arrOrdenes: Orden[] | undefined;

  displayedColumns: string[] = ['sku', 'etd', 'description', 'quantity', ' typeContainer',];
  dataSource = ELEMENT_DATA;

  
  constructor(private addService : AddService) { }

  

  ngOnInit(): void {
    this.addService.getOrdenes$().subscribe(ordenes => {
      this.arrOrdenes = ordenes;
    }); 
  }

}
