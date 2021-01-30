import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AddTradeDialogComponent } from '../add-trade-dialog/add-trade-dialog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  addTrade() {
    const dialogRef = this.dialog.open(AddTradeDialogComponent);
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    });
  }
}
