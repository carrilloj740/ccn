import { CdkStepper } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [{ provide: CdkStepper, useExisting: DetailsComponent }]

})
export class DetailsComponent implements OnInit {
  selectedIndex: number | undefined;
  onClick(index: number): void {
    this.selectedIndex = index;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
