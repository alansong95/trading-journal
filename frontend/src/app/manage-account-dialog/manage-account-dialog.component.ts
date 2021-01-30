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
      console.log(res);
    });
  }


}
