import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Trade } from '../trade';
import { TradeDialogComponent } from '../trade-dialog/trade-dialog.component';
import { TradeService } from '../trade.service';


@Component({
  selector: 'app-trades-display',
  templateUrl: './trades-display.component.html',
  styleUrls: ['./trades-display.component.css']
})
export class TradesDisplayComponent implements OnInit {
  displayedColumns: string[] = ['openDate', 'expiryDate', 'closeDate', 'symbol', 'type', 'strikes', 'open', 'filled', 'quantity', 'pl', 'settings'];
  trades: Trade[];

  constructor(
    public dialog: MatDialog,
    private tradeService: TradeService,
  ) { }

  ngOnInit(): void {
    this.tradeService.getTrades().subscribe(res => {
      if (res.resp === 'success') {
        this.trades = res.data.trades;
        console.log(this.trades);
      } else {
        alert(res.resp.message);
      }
    })
  }

  updateTrade(trade) {
    const dialogRef = this.dialog.open(TradeDialogComponent, {
      data: {
        trade: trade
      }
    });
    dialogRef.afterClosed().subscribe(trade => {
      if (trade) {
        this.tradeService.updateTrade(trade).subscribe(res => {
          console.log(res);
        });
      }
    });
  }
}
