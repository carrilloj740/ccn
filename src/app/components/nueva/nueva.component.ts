import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


export interface PeriodicElement {
  sku: number;
  producto: string;
  etd: number;
  cantidad: number;
  contenedor: string;
  shipment: string;
  icon: string;
  contenedors: number
}

const ELEMENT_DATA: PeriodicElement[] = [
  { sku: 113320, cantidad: 288, icon: 'icon', contenedors: 14, contenedor: 'Truck', producto: 'HE 355K2Emb', etd: 1.0079, shipment: 'Truck' },
  { sku: 223456, cantidad: 1235, icon: 'icon', contenedors: 56, contenedor: 'Truck', producto: 'HE 355Ti 4x6', etd: 4.0026, shipment: 'Truck' },

];

@Component({
  selector: 'app-nueva',
  templateUrl: './nueva.component.html',
  styleUrls: ['./nueva.component.css']
})
export class NuevaComponent implements OnInit {

  form: FormGroup;
  userList: any= [];
  productsList: any =  [];

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



  displayedColumns: string[] = ['sku', 'producto', 'etd', 'shipment', 'contenedors', 'contenedor', 'cantidad', 'icon'];
  dataSource = ELEMENT_DATA;




  constructor(private fb: FormBuilder, private usersService: UsersService,) {
    console.log('El componente se ha creado');

    this.form = this.fb.group({
      poNumber: ['', Validators.required],
      shipTo: ['', Validators.required],
      soldTo: ['', Validators.required],
      source: ['', Validators.required],
      country: ['', Validators.required],
      containerType: ['', Validators.required],
      shipmentType: ['', Validators.required],
      selectProduct: ['', Validators.required],
      pallets: ['', Validators.required],
      incortem: ['', Validators.required],
      loading: ['', Validators.required],
      quantity: ['', Validators.required],
      requestEta: ['', Validators.required],
      requestEtd: ['', Validators.required],
      orderLine: ['', Validators.required],
      minimumOrder: ['', Validators.required],
    })
  }

  agregarOrden() {
    console.log(this.form);
  }

  ngOnInit(): void {
    console.log("Inicializa");
    this.getItems()
  }


  getItems(){
    this.usersService.getItems()
    .subscribe((products: any) => this.productsList = products.items);
  }

  

}


