import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  accountsList: any = []
  selectedAccount: any = {}

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAccountChange()
  }

  getAccountChange() {
    this.apiService.getAccountChange()
      .subscribe((account: any) => {
        this.accountsList = account.items
        console.log(this.accountsList)
      });
  }

  selectAccount(account: any): any {
    console.log(account)
  }
}
