import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MoreComponent } from 'src/app/components/more/more.component';
import { AddService } from 'src/app/services/add.service';


export interface PeriodicElement {
  vista: number,
  order_Number: number,
  sold_Number: number,
  sold_to: string,
  etd_solicitado: string,
  ETA_solicitada: string

}

const ELEMENT_DATA: PeriodicElement[] = [
  { vista: 1, order_Number: 2345456, sold_Number: 6546435, sold_to: 'Wilmer Barrios', etd_solicitado: '2021-12-11', ETA_solicitada: '2022-03-12' },
  { vista: 1, order_Number: 2564350, sold_Number: 2343445, sold_to: 'Ariel Leivi', etd_solicitado: '2021-03-11', ETA_solicitada: '2022-10-10' },

];



@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css']
})



export class SeguimientoComponent implements OnInit {
  displayedColumns: string[] = ['vista', 'order_Number', 'sold_Number', 'sold_to', 'etd_solicitado', 'ETA_solicitada'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor (public dialog: MatDialog, private addService: AddService) { }

  openDialog(): void{
    let dialogRef = this.dialog.open(MoreComponent, {
    });

    dialogRef.afterClosed().subscribe(result =>{
      console.log('Thedialog was closed');
    });
  }

  ngOnInit(): void {
  }

 

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
