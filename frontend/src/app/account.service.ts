import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAccounts(): Observable<string[]> {
    return this.httpClient.get<string[]>(environment.serverURL + '/accounts/get');
  }
}
