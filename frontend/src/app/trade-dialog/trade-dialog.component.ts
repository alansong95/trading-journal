import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


import { Trade } from '../trade';

@Component({
  selector: 'app-trade-dialog',
  templateUrl: './trade-dialog.component.html',
  styleUrls: ['./trade-dialog.component.css']
})
export class TradeDialogComponent implements OnInit {
  trade: Trade;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    if (this.isAdd()) {
      this.trade = new Trade();
    } else {
      this.trade = this.data.trade;
    }
  }

  isAdd() {
    return !this.data.trade;
  }

  isEdit() {
    return this.data.trade;
  }
}
