import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

import { AccountService } from '../account.service';


@Component({
  selector: 'app-manage-account-dialog',
  templateUrl: './manage-account-dialog.component.html',
  styleUrls: ['./manage-account-dialog.component.css']
})
export class ManageAccountDialogComponent implements OnInit {
  accounts = [];

  constructor(
    private accountService: AccountService,
    private dialogRef: MatDialogRef<ManageAccountDialogComponent>,
  ) { }

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe(res => {
      if (res.resp === 'success') {
        console.log(res);
        this.accounts = res.data.accounts;
      } else {
        alert(res.data.message);
        this.dialogRef.close();
      }
    });
  }

  addAccount(toAdd: string) {
    this.accounts.push(toAdd);
  }

  deleteAccount(toDelete: string) {
    this.accounts = this.accounts.filter(account => account !== toDelete);
  }

  // saveAccounts() {
  //   this.accountService.saveAccounts(this.accounts).subscribe(res => {
  //     if (res.resp === 'success') {
  //       console.log(res);
  //       this.accounts = res.data.accounts;
  //     } else {
  //       alert('Could not save your accounts. Please try again later.');
  //     }
  //   });
  // }

  updateAccounts() {
    return this.accountService.updateAccounts(this.accounts);
  }

  onClose() {
    console.log(this.accounts);
    this.updateAccounts().subscribe(res => {
      if (res.resp === 'success') {
        this.accounts = res.data.accounts;
        this.dialogRef.close();
      } else {
        alert(res.data.message);
      }
    });
  }
}
