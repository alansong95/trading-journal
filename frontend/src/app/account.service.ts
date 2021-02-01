import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private httpClient: HttpClient,
    private userService: UserService,
  ) { }

  getAccounts(): Observable<any> {
    return this.httpClient.get<any>(environment.serverURL + '/accounts/get/' + this.userService.getUser()).pipe(
      catchError((_) => {
        return of({resp: 'fail', data: {message: 'Could not fetch your accounts. Please try again later.'}});
      })
    );
  }

  updateAccounts(accounts): Observable<any> {
    return this.httpClient.post<any>(environment.serverURL + '/accounts/update', {
      accounts,
      user: this.userService.getUser()
    }).pipe(
      catchError((_) => {
        return of({resp: 'fail', data: {message: 'Could not save your accounts. Please try again later.'}});
      })
    );
  }
}
