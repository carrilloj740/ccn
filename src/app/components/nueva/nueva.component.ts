import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddService, Orden } from 'src/app/services/add.service';
import { Router } from '@angular/router';
import { OrdenIn } from 'src/app/interfaces/ordenIn';
import { Product } from './Product';
import { Order } from './Order';
import { TableComponent } from 'src/app/table/table.component';


@Component({
  selector: 'app-nueva',
  templateUrl: './nueva.component.html',
  styleUrls: ['./nueva.component.css']
})
export class NuevaComponent {


  buttonDisabled: boolean = true;
  formHeader: FormGroup;
  formProduct: FormGroup;
  productsList: any = []
  addressesList: any = []

  constructor(private fb: FormBuilder, private addService: AddService, private apiService: ApiService, private tableComponent: TableComponent,) {

    this.formHeader = new FormGroup({
      etd: new FormControl(),
      poNbr: new FormControl(),
      incortem: new FormControl(),
      soldTo: new FormControl(),
      shipTo: new FormControl(),
      source: new FormControl(),
      country: new FormControl(),
      eta: new FormControl(),
    })

    this.formProduct = new FormGroup({
      sku: new FormControl(),
      description: new FormControl(),
      typeContainer: new FormControl(),
      quantity: new FormControl(),
      loading: new FormControl(),
      minimumOrder: new FormControl(1, Validators.min(1)),
      quantityContainer: new FormControl(),
      pallets: new FormControl(),
      shipmentType: new FormControl(),

    })

  }

  listaProductos: any = [];
  productoSeleccionado = "";


  ngOnInit(): void {
    this.getItemPrices()
    this.getAddress()

  }

  onSubmitProducto() {
    this.addService.agregarProducto(new Product(this.formProduct.value.sku.ItemNumber, this.formProduct.value.sku.ItemDescription, this.formProduct.value.quantity, this.formProduct.value.typeContainer, this.formProduct.value.quantityContainer, this.formProduct.value.loading, this.formProduct.value.minimumOrder, this.formProduct.value.pallets, this.formProduct.value.shipmentType), this.formHeader.value.etd);
    this.formProduct.reset();


  }

  getAddress() {
    this.apiService.getListAddress()
      .subscribe((address: any) => this.addressesList = address.items);
    console.log(this.addressesList)
  }

  getItems() {
    this.apiService.getItems()
      .subscribe((products: any) => this.productsList = products.items);
    console.log(this.productsList)
  }


  getItemPrices() {
    this.apiService.getAccountInfo().subscribe((account: any) => {
      console.log(account)
      this.apiService.getPriceList(account.OrganizationDEO___ORACO__PriceBook_Id_c).subscribe((priceBookInfo: any) => {
        console.log(priceBookInfo)
        if (priceBookInfo.StatusCode == 'ACTIVE') {
          this.apiService.getPrice(account.OrganizationDEO___ORACO__PriceBook_Id_c).subscribe((priceItems: any) => {
            console.log(priceItems)
            this.productsList = priceItems.items
          })
        }
      })
    })
  }


  completarOrden() {
    console.log(new Order(this.formHeader.value.poNbr, this.formHeader.value.shipTo, this.formHeader.value.incortem, this.formHeader.value.soldTo, this.formHeader.value.source, this.formHeader.value.eta, this.formHeader.value.etd, this.formHeader.value.country, this.addService.productos))
    console.log(this.formHeader.value)
  }

}
