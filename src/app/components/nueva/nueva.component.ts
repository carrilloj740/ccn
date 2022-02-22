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
  userList: any = [];
  productsList: any = [
   ]

  shipTos: any[] = [
    { value: '19677 - Compañia Cervecera de Nicaragua, S.', viewValue: '19677 - Compañia Cervecera de Nicaragua, S.' },
    { value: '60577 - Compañia Cervecera de Nicaragua, S.', viewValue: '60577 - Compañia Cervecera de Nicaragua, S.' },
  ];

  soldTos: any[] = [
    { value: '19677 - Compañia Cervecera de Nicaragua, S.', viewValue: '19677 - Compañia Cervecera de Nicaragua, S.' },
    { value: '60577 - Compañia Cervecera de Nicaragua, S.', viewValue: '60577 - Compañia Cervecera de Nicaragua, S.' },
  ];

  sources: any[] = [
    { value: 'Costa Rica', viewValue: 'Costa Rica' },
    { value: 'HMEx', viewValue: 'HMEx' },
  ];

  countrys: any[] = [
    { value: 'Nicaragua', viewValue: 'Nicaragua' },
    { value: 'Argentina', viewValue: 'Argentina' },
  ];

  /*selectProducts: any[] = [
    {value: 'He 355K2Emb 4x6 Nbr 72 PP', viewValue: '113320 - He 355K2Emb 4x6 Nbr 72 PP'},
    {value: 'He 355Ti Can 96 PP', viewValue: ' 113321 - He 355Ti Can 96 PP'},
  ];*/

  shipmentTypes: any[] = [
    { value: 'Truck', viewValue: 'Truck' },
    { value: 'Naval', viewValue: 'Naval' },
  ];

  containerTypes: any[] = [
    { value: 'Truck', viewValue: 'Truck' },
    { value: 'Naval', viewValue: 'Naval' },
  ];





  arrOrdenes: Orden[] | undefined;

  listaOrdenes: any = {
    descripcion: "Aquí va la primera descripción",
    descripcion2: "Segunda descripción"
  }







  constructor(private fb: FormBuilder, private apiService: ApiService, private addService: AddService) {




    console.log('El componente se ha creado');

    this.form = new FormGroup({
      poNumber: new FormControl(),
      shipTo: new FormControl(),
      soldTo: new FormControl(),
      source: new FormControl(),
      country: new FormControl(),
      containerType: new FormControl(),
      shipmentType: new FormControl(),
      selectProduct: new FormControl(),
      pallets: new FormControl(),
      incortem: new FormControl(),
      loading: new FormControl(),
      quantity: new FormControl(),
      requestEta: new FormControl(),
      requestEtd: new FormControl(),
      orderLine: new FormControl(),
      minimumOrder: new FormControl(),
    })
  }

  agregarOrden() {
    console.log(this.form);
  }

  ngOnInit(): void {
    console.log("Inicializa");
    this.getItems()


  }


  getItems() {
    this.apiService.getItems()
      .subscribe((products: any) => this.productsList = products.items);
  }

  onSubmit() {
    this.addService.agregarOrdenes$(this.form.value);
    this.addService.getOrdenes$().subscribe(ordenes => {
      this.arrOrdenes = ordenes;
    });
  }

}


