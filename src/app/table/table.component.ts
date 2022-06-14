import { Component, OnInit, ViewChild } from '@angular/core';
import { AddService, Orden } from '../services/add.service';
import { Product } from '../components/nueva/Product';
import { NuevaComponent } from '../components/nueva/nueva.component';
import { ApiService } from '../services/api.service';

let ordenList: Orden[] = [];
shoppingCartList: [] = [];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent implements OnInit {

  shoppingCartList: any = [];
  productos: Product[] = [];
  addressesList: any = []
  displayedColumns: string[] = ['sku', 'description', 'quantity', 'requestEtd', 'typeContainer', 'quantityContainer'];
  dataSource = [...this.productos];

  //  @ViewChild('productoTable', {static : true}) productoTable!: MatTable<any>;

  constructor(private addService: AddService, private apiService: ApiService,) { }

  ngOnInit(): void {
    this.addService.getProductos().subscribe(productos => {
      this.productos = productos;
    });
    this.getShoppingCartList(this.apiService.account.shoppingCartId);
  }

  getShoppingCartList(shoppingCartId: number) {
    this.apiService.getShoppingCartItems(shoppingCartId)
      .subscribe((shoppingCart: any) => {
        this.shoppingCartList = shoppingCart.items;
        console.log(this.shoppingCartList)
      });
  }
}