import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import { AddService, Orden } from 'src/app/services/add.service';
import { Router } from '@angular/router';
import { OrdenIn } from 'src/app/interfaces/ordenIn';
import { Product } from './Product';
import { Order } from './Order';
import { logicFilling } from './logic';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InicioComponent } from '../inicio/inicio.component';
import { MatTable } from '@angular/material/table';


@Component({
  selector: 'app-nueva',
  templateUrl: './nueva.component.html',
  styleUrls: ['./nueva.component.css'],
  providers: [AddService]
})
export class NuevaComponent {

  bodegas: any[] = [];
  selectedProduct = {} as any;
  selectedProductDetails = {} as any;
  selectedWarhouse = {} as any;
  incoterm: string = "";
  shipmentTypeList: any[] = [];
  containerType: any[] = [];

  logic: logicFilling = {
    pallets: 0,
    quantity: 0,
  };

  cantidad: any;
  cantidadMul: any = 20;
  confirmaCantidad: boolean = false;
  selected = 'Truck';
  shipmentType: string = ''
  buttonDisabled: boolean = true;
  formHeader: FormGroup;
  formProduct: FormGroup;
  productsList: any = []
  accountAddressesList: any = []
  shoppingCartList: any = []
  minDate: Date;
  maxDate: Date;
  productos: Product[] = [];


  constructor(private fb: FormBuilder, private addService: AddService, private apiService: ApiService, private _snackBar: MatSnackBar) {

    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();

    this.minDate = new Date(currentYear, currentMonth, 45);
    this.maxDate = new Date(currentYear, currentMonth + 1, 20);
    // TODO: Se tiene pensado colocar un maximo de 5 años, falta definir.


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
    // this.getAddress()
    // this.getAccountShoppingCart()
    this.accountAddressesList = this.apiService.bodegas
    this.addService.getProductos().subscribe(productos => {
      this.productos = productos;
    });
  }

  getAccountShoppingCart() {
    this.apiService.getAccountInfo(this.apiService.bodegaSeleccionada.PartyNumber).subscribe((account: any) => {
      // this.apiService.account = account
      // TODO: unificar llamada del getAccountInfo
      console.log(account)
      this.getItemShoppingCart(account["OrganizationDEO___ORACO__ShoppingCart_Id_c"])
    })
  }

  getItemShoppingCart(shoppingCartId: any) {
    this.apiService.getShoppingCartItems(shoppingCartId)
      .subscribe((shoppingCart: any) => {
        this.shoppingCartList = shoppingCart.items
        console.log(this.shoppingCartList)
      });
  }

  selectSoldTo(account: any) {
    console.log(account)
    this.apiService.bodegaSeleccionada = account
    this.getItemPrices()
    this.getShoppingCartList(this.apiService.bodegaSeleccionada["OrganizationDEO___ORACO__ShoppingCart_Id_c"])
    this.getContainers()
    this.incoterm = account.OrganizationDEO_INCOTERM_c
    // this.getContainerType()
  }

  postCreateShoppingCart() {
  }

  async onSubmitProducto() {
    await this.addService.agregarProducto(this.apiService.bodegaSeleccionada["OrganizationDEO___ORACO__ShoppingCart_Id_c"], new Product(this.selectedProduct.InvItemId, this.formProduct.value.sku.ItemNumber, this.formProduct.value.sku.ItemDescription, this.formProduct.value.quantity, this.formProduct.value.typeContainer, this.formProduct.value.quantityContainer, this.formProduct.value.loading, this.formProduct.value.minimumOrder, this.formProduct.value.pallets, this.formProduct.value.shipmentType), this.formHeader.value.etd);
    this.formProduct.reset();
    this.getShoppingCartList(this.apiService.bodegaSeleccionada["OrganizationDEO___ORACO__ShoppingCart_Id_c"]);

  }

  // getAddress() {
  //   this.apiService.getListAddress()
  //     .subscribe((address: any) => this.addressesList = address.items);
  //   console.log(this.addressesList)
  // }

  getItems() {
    this.apiService.getItems()
      .subscribe((products: any) => this.productsList = products.items);
    console.log(this.productsList)
  }

  getItemPrices() {
    this.apiService.getAccountInfo(this.apiService.bodegaSeleccionada.PartyNumber).subscribe((account: any) => {
      console.log(account)
      this.apiService.account = account
      this.apiService.getPriceList(account.OrganizationDEO___ORACO__PriceBook_Id_c).subscribe((priceBookInfo: any) => {
        this.getShoppingCartList(this.apiService.bodegaSeleccionada["OrganizationDEO___ORACO__ShoppingCart_Id_c"])
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
    this.apiService.confirmationShoppingCart(this.apiService.bodegaSeleccionada["OrganizationDEO___ORACO__ShoppingCart_Id_c"]).subscribe((response: any) => {
      console.log(response)
    })
  }

  calculo(e: number) {
    console.log(e)
    if (e % this.cantidadMul != 0) {
      this.confirmaCantidad = false
    } else {
      this.confirmaCantidad = true
    }
  }

  error() {
    this._snackBar.open('Cantidad invalida', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  getContainers() {
    this.apiService.getListAddress(this.apiService.bodegaSeleccionada.PartyNumber).subscribe((address: any) => {
      console.log(address)
      this.apiService.getShipmentType(this.apiService.bodegaSeleccionada.PartyNumber, address.items[0].AddressNumber).subscribe((shipmentType: any) => {
        console.log(shipmentType)
        this.shipmentTypeList = shipmentType.items
      })
      this.apiService.getContainerType(this.apiService.bodegaSeleccionada.PartyNumber, address.items[0].AddressNumber).subscribe((containerType: any) => {
        console.log(containerType)
      })
    })

  }

  getShoppingCartList(shoppingCartId: number) {
    this.apiService.getShoppingCartItems(shoppingCartId)
      .subscribe((shoppingCart: any) => {
        this.shoppingCartList = shoppingCart.items;
        console.log(this.shoppingCartList)
      });
  }

  getItemInfo(producto: any) {
    this.selectedProduct = producto
    this.apiService.getItemById(producto.InvItemId).subscribe((item: any) => {
      this.selectedProductDetails = item
      console.log(this.selectedProductDetails)
    })
  }
}

