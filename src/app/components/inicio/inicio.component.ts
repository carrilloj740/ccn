import { Component, OnInit, VERSION } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


export interface Amount {
  totalAmount: string;
  wareHouse1:string;
  wareHouse2:string;
  wareHouse3:string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  amount: Amount = {
    totalAmount: '100.000$',
    wareHouse1: '50.000$',
    wareHouse2: '20.000$',
    wareHouse3: '30.000$',

  };


  constructor() { }


  ngOnInit() {

  }

}