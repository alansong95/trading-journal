import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { TradeDialogComponent } from '../trade-dialog/trade-dialog.component';
import { TradeService } from '../trade.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private tradeService: TradeService,
  ) { }

  ngOnInit(): void {
  }

  addTrade() {
    const dialogRef = this.dialog.open(TradeDialogComponent, {
      data: {
        trade: null
      }
    });
    dialogRef.afterClosed().subscribe(trade => {
      if (trade) {
        this.tradeService.addTrade(trade).subscribe(res => {
          console.log(res);
        });
      }
    });
  }
}
