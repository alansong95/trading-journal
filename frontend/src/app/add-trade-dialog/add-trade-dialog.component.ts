import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Trade } from '../trade';

@Component({
  selector: 'app-add-trade-dialog',
  templateUrl: './add-trade-dialog.component.html',
  styleUrls: ['./add-trade-dialog.component.css']
})
export class AddTradeDialogComponent implements OnInit {
  trade: Trade;

  constructor() { }

  ngOnInit(): void {
    this.trade = new Trade();
  }
}
