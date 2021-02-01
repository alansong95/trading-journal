import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {HeaderComponent} from './header/header.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ManageAccountDialogComponent } from './manage-account-dialog/manage-account-dialog.component';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import { MainComponent } from './main/main.component';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { TradeDialogComponent } from './trade-dialog/trade-dialog.component';
import {MatSelectModule} from '@angular/material/select';
import { TradesDisplayComponent } from './trades-display/trades-display.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ManageAccountDialogComponent,
    MainComponent,
    TradeDialogComponent,
    TradesDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatListModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule,
    MatTableModule
  ],
  entryComponents: [
    ManageAccountDialogComponent,
    TradeDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
