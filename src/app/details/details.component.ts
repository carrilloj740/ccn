import { CdkStepper, STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';

export interface tracking {
  received: string;
  validate: string;
  process: string;
  shipped: string;
  orderNbr:number;

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


  tiles: tracking[] = [
    { received: ' 12-05-22', validate: '25-05-22', process: '27-07-22', shipped: '30-05-22', orderNbr: 32231322022,},
  ];

  myVar = false

  selectedIndex: number | undefined;
  onClick(index: number): void {
    this.selectedIndex = index;

  }
  constructor() { }

  ngOnInit(): void {
  }

}
