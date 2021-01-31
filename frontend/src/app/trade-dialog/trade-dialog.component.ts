import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Trade } from '../trade';

@Component({
  selector: 'app-trade-dialog',
  templateUrl: './trade-dialog.component.html',
  styleUrls: ['./trade-dialog.component.css']
})
export class TradeDialogComponent implements OnInit {
  trade: Trade;

  constructor() { }

  ngOnInit(): void {
    this.trade = new Trade();
  }
}
