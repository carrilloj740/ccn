import { Component, OnInit } from '@angular/core';
import { AddService, Orden } from '../services/add.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  
  arrOrdenes: Orden[] | undefined;


  constructor(private addService: AddService) { }

  ngOnInit(): void {
    this.addService.getOrdenes$().subscribe(ordenes => {
      this.arrOrdenes = ordenes;

    });

  }
}