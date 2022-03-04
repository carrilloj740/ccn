import { Component, OnInit } from '@angular/core';
import { AddService, Orden } from '../services/add.service';



const ordenList: Orden[] = [
  {sku: '', description: '', etd : '',  quantity: '', typeContainer: '', quantityContainer: ''},
  
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})



export class TableComponent implements OnInit {
  
  arrOrdenes: Orden[] | undefined;

  displayedColumns: string[] = ['sku', 'description', 'quantity', 'requestEtd', 'typeContainer', 'quantityContainer' ];
  dataSource = ordenList;


  constructor(private addService: AddService) { }

  ngOnInit(): void {
    this.addService.getOrdenes$().subscribe(ordenes => {
      this.arrOrdenes = ordenes;

    });

  }
}