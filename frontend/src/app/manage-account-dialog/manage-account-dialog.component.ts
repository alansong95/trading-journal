import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-manage-account-dialog',
  templateUrl: './manage-account-dialog.component.html',
  styleUrls: ['./manage-account-dialog.component.css']
})
export class ManageAccountDialogComponent implements OnInit {
  accounts;

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe(res => {
      if (res.resp === 'success') {
        this.accounts = res.data.accounts;
      } else {
        alert('Could not fetch your accounts. Please try again later.');
      }
    });
  }

  addAccount(accountName) {
    this.accounts.push(accountName);
  }
}
