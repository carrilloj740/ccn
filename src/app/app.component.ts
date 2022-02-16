import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService],
})
export class AppComponent implements OnInit {
  title = 'consapi';
  userList: any = [];
  countryList: any = [];
  
  constructor(private userService: UsersService){
    console.log('El componente se ha creado');
  }

  ngOnInit(): void {
      console.log('El componente se ha inicializado');
      
      this.userService.getProducts()
      .subscribe((response: any) => {this.userList = response});
  }
    
}
