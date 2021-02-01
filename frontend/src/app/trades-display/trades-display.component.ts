import { Component, OnInit } from '@angular/core';

import { Trade } from '../trade';
import { TradeService } from '../trade.service';


@Component({
  selector: 'app-trades-display',
  templateUrl: './trades-display.component.html',
  styleUrls: ['./trades-display.component.css']
})
export class TradesDisplayComponent implements OnInit {
  displayedColumns: string[] = ['openDate', 'expiryDate', 'closeDate', 'symbol', 'type', 'strikes', 'open', 'filled', 'quantity', 'pl'];
  trades: Trade[];

  constructor(
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

}
