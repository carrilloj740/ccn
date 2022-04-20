import { CdkStepper, STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface tracking {
  received: string;
  validate: string;
  process: string;
  shipped: string;
  estado: string;
}



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: {
      showError: true,
      displayDefaultIndicatorType: false
    }
  }]

})



export class DetailsComponent implements OnInit {

  ordenNumero: number = 132;
  estadoReceived: string = '';
  process: string = '';
  validate: string = '';
  received: string = '';
  shipped: string = '';
  tile = {} as tracking

  selectedIndex: number | undefined;
  onClick(index: number): void {
    this.selectedIndex = index;

  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: { orden: any }) {

    this.received = data.orden.received
    this.process = data.orden.process
    this.validate = data.orden.validate
    this.ordenNumero = data.orden.order_Number
    this.shipped = data.orden.shipped
    
    if (this.tile.estado == 'validate') this.estadoReceived = '✔';
  }

  ngOnInit(): void {

  }

}
