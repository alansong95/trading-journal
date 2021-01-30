import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAccounts(): Observable<any> {
    return this.httpClient.get<any>(environment.serverURL + '/accounts/get').pipe(
      catchError((_) => {
        return of({resp: 'fail', data: {message: 'Could not fetch your accounts. Please try again later.'}});
      })
    );
  }

  saveAccounts(accounts): Observable<any> {
    return this.httpClient.post<any>(environment.serverURL + '/accounts/save', {
      accounts
    }).pipe(
      catchError((_) => {
        return of({resp: 'fail', data: {message: 'Could not save your accounts. Please try again later.'}});
      })
    );
  }
}
