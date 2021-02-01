import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Trade } from './trade';
import { environment } from '../environments/environment';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TradeService {

  constructor(
    private httpClient: HttpClient,
    private userService: UserService,
  ) { }

  addTrade(trade: Trade): Observable<any> {
    return this.httpClient.post<any>(environment.serverURL + '/trade/add', {
      trade,
      user: this.userService.getUser(),
    }).pipe(
      catchError((_) => {
        return of({resp: 'fail', data: {message: 'Could not add the trade. Please try again later.'}});
      })
    );
  }

  getTrades(): Observable<any> {
    return this.httpClient.get<any>(environment.serverURL + '/trades/get/' + this.userService.getUser()).pipe(
      catchError((_) => {
        return of({resp: 'fail', data: {message: 'Could not load your trades. Please try again later.'}});
      })
    );
  }
}
