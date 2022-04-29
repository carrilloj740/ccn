import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { DetailsComponent } from 'src/app/details/details.component';
import { AddService } from 'src/app/services/add.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

export interface PeriodicElement {
  vista: number,
  order_Number: number,
  sold_Number: number,
  sold_to: string,
  etd_solicitado: string,
  ETA_solicitada: string,
  icon: string,
  received:string,
  validate:string,
  process:string,
  shipped:string,
  estado:string,
}

const ELEMENT_DATA: PeriodicElement[] = [
  { vista: 1, order_Number: 2345456, sold_Number: 6546435, sold_to: 'Wilmer Barrios', etd_solicitado: '2021-12-11', ETA_solicitada: '2022-03-12', icon: 'aca', received: ' 16-05-22', validate: '25-07-22', process: '17-07-22', shipped: '01-05-22', estado:'validate'},
  { vista: 1, order_Number: 2564350, sold_Number: 2343445, sold_to: 'Ariel Leivi', etd_solicitado: '2021-03-11', ETA_solicitada: '2022-10-10', icon: 'aca', received: ' 02-12-22', validate: '15-08-22', process: '07-07-22', shipped: '22-05-22', estado:'validate' },
  { vista: 1, order_Number: 3223132, sold_Number: 2343445, sold_to: 'Jose Carrillo', etd_solicitado: '2021-05-17', ETA_solicitada: '2022-12-11', icon: 'aca', received: ' 30-08-22', validate: '05-03-22', process: '10-07-22', shipped: '30-011-22', estado:'validate' },

];



@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css']
})


export class SeguimientoComponent implements OnInit {
  displayedColumns: string[] = ['vista', 'order_Number', 'sold_Number', 'sold_to', 'etd_solicitado', 'ETA_solicitada', 'icon'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(public dialog: MatDialog, private addService: AddService, public _router: Router, public _location: Location) { }

 

  openDialog(element:any): void {
    console.log(element)
    let dialogRef = this.dialog.open(DetailsComponent, {

      data: {orden: element }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Thedialog was closed');
    });
  }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  refresh(): void {
    this._router.navigateByUrl("/refresh", { skipLocationChange: true }).then(() => {
      console.log(decodeURI(this._location.path()));
      this._router.navigate([decodeURI(this._location.path())]);
    });
      
  }
}
