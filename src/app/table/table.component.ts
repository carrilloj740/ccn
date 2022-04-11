import { Component, OnInit } from '@angular/core';
import { AddService, Orden } from '../services/add.service';
import { Product } from '../components/nueva/Product';
import { MatTableDataSource } from '@angular/material/table';



const ordenList: Orden[] = [
  {sku: '', description: '', etd : '',  quantity: '', typeContainer: '', quantityContainer: ''},
  
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})



export class TableComponent implements OnInit {
  
  productos: Product[] | undefined;

  displayedColumns: string[] = ['sku', 'description', 'quantity', 'requestEtd', 'typeContainer', 'quantityContainer' ];
  dataSource = ordenList;

  constructor(private addService: AddService) { }

  ngOnInit(): void {
    this.addService.getProductos().subscribe(productos => {
      this.productos = productos;

    });

  }
}