import { Component, OnInit } from '@angular/core';
import {ManageAccountDialogComponent} from '../manage-account-dialog/manage-account-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  manageAccounts() {
    const dialogRef = this.dialog.open(ManageAccountDialogComponent, {restoreFocus: false});

    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    dialogRef.afterClosed().subscribe(() => console.log('ok'));
  }
}
