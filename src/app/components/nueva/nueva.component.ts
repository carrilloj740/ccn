import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddService, Orden } from 'src/app/services/add.service';





@Component({
  selector: 'app-nueva',
  templateUrl: './nueva.component.html',
  styleUrls: ['./nueva.component.css']
})
export class NuevaComponent {

  form: FormGroup;
  productsList: any = []
  constructor(private addService: AddService, private apiService : ApiService ) {

    this.form = new FormGroup({
      sku: new FormControl(),
      description: new FormControl(),
      etd: new FormControl(),
      quantity: new FormControl(),
      typeContainer: new FormControl(),
      quantityContainer: new FormControl(),
      poNbr: new FormControl(),
      incortem: new FormControl(),
      soldTo: new FormControl(),
      shipTo: new FormControl(),
      source: new FormControl(),
      country: new FormControl(),
      loading: new FormControl(),
      minimumOrder: new FormControl(),
      pallets: new FormControl(),
      eta: new FormControl(),
      shipmentType: new FormControl(),
      start: new FormControl(),
      end: new FormControl(),

    })

  }

  listaProductos: any = [];
  productoSeleccionado = "";


  ngOnInit(): void {
    this.getItems()
  }

  onSubmit() {
    this.addService.agregarOrdenes$(this.form.value);
    this.form.reset();

  }

  getItems() {
    this.apiService.getItems()
      .subscribe((products: any) => this.productsList = products.items);
    console.log(this.productsList)
  }
  
}

