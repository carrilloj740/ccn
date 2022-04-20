import { Component, OnInit, ViewChild } from '@angular/core';
import { AddService, Orden } from '../services/add.service';
import { Product } from '../components/nueva/Product';
import { NuevaComponent } from '../components/nueva/nueva.component';

let ordenList: Orden[] = [];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})



export class TableComponent implements OnInit {
  
  
  productos: Product[] = [];
  displayedColumns: string[] = ['sku', 'description', 'quantity', 'requestEtd', 'typeContainer', 'quantityContainer' ];
  dataSource = [...this.productos];

  //  @ViewChild('productoTable', {static : true}) productoTable!: MatTable<any>;
  
  constructor(private addService: AddService) { }

  ngOnInit(): void {
    this.addService.getProductos().subscribe(productos => {
      this.productos = productos;

    });

  }

 
  
}