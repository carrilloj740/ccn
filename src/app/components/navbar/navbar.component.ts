import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NuevaComponent } from '../nueva/nueva.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  accountsList: any = []
  selectedAccount: any = {}

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    this.selectedAccount = this.apiService.selectedAccount
    this.getAccountChange()
  }

  getAccountChange() {
    this.apiService.getAccountChange()
      .subscribe((account: any) => {
        this.selectedAccount = this.apiService.selectedAccount
        this.accountsList = account.items
        console.log(this.accountsList)
      });
  }

  selectAccount(account: any): any {
    console.log(account)
    this.apiService.selectedAccount = account;
    this.selectedAccount = this.apiService.selectedAccount
    if(this.apiService.selectedAccount.PartyNumber != null){
      this.apiService.partyNumber = this.apiService.selectedAccount.PartyNumber
    } else {
      this.apiService.partyNumber = this.apiService.selectedAccount.SubjectPartyNumber
    }

  }

}
