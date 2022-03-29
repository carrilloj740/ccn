import { CdkStepper, STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';



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
  
  myVar = false

  selectedIndex: number | undefined;
  onClick(index: number): void {
    this.selectedIndex = index;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
