import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


import { Trade } from '../trade';
import { AccountService } from '../account.service';
import { constants } from '../../environments/environment';

@Component({
  selector: 'app-trade-dialog',
  templateUrl: './trade-dialog.component.html',
  styleUrls: ['./trade-dialog.component.css']
})
export class TradeDialogComponent implements OnInit {
  trade: Trade;

  // constants
  accounts;
  types = constants.TYPES;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private accountService: AccountService,
  ) { }

  ngOnInit(): void {
    if (this.isAdd()) {
      this.trade = new Trade();
    } else {
      this.trade = this.data.trade;
    }

    this.accountService.getAccounts().subscribe(
      res => {
        if (res.resp === 'success') {
          this.accounts = res.data.accounts;
          console.log(this.accounts);
        }
      }
    );
  }

  isAdd() {
    return !this.data.trade;
  }

  isEdit() {
    return this.data.trade;
  }
}
