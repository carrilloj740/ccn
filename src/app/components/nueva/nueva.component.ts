import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddService, Orden } from 'src/app/services/add.service';
import { Router } from '@angular/router';
import { OrdenIn } from 'src/app/interfaces/ordenIn';
import { Product } from './Product';
import { Order } from './Order';
@Component({
  selector: 'app-nueva',
  templateUrl: './nueva.component.html',
  styleUrls: ['./nueva.component.css']
})
export class NuevaComponent {

  formHeader: FormGroup;
  formProduct: FormGroup;
  productsList: any = []
  constructor(private addService: AddService, private apiService: ApiService) {

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
      minimumOrder: new FormControl(),
      quantityContainer: new FormControl(),
      pallets: new FormControl(),
      shipmentType: new FormControl(),

    })

  }

  listaProductos: any = [];
  productoSeleccionado = "";


  ngOnInit(): void {
    this.getItems()

  }

  onSubmitProducto() {
    const sku = this.formProduct.value.sku.ItemNumber + "/" + this.formProduct.value.sku.Description
    const split = sku.split("/")
    this.addService.agregarProducto(new Product(split[0],split[1],this.formProduct.value.quantity,this.formProduct.value.typeContainer,this.formProduct.value.quantityContainer,this.formProduct.value.loading,this.formProduct.value.minimumOrder,this.formProduct.value.pallets,this.formProduct.value.shipmentType), this.formHeader.value.etd);
    this.formProduct.reset();

  }

  getItems() {
    this.apiService.getItems()
      .subscribe((products: any) => this.productsList = products.items);
    console.log(this.productsList)
  }

  completarOrden(){
    console.log(new Order(this.formHeader.value.poNbr, this.formHeader.value.shipTo, this.formHeader.value.incortem, this.formHeader.value.soldTo,this.formHeader.value.source,this.formHeader.value.eta, this.formHeader.value.etd, this.formHeader.value.country,this.addService.productos))
  }

  // this.addService.getOrdenes$().subscribe(ordenes => {
  //   this.arrOrdenes = ordenes;

  // });

}



