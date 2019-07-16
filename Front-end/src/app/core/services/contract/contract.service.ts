import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ContractService {

  BASE_URI = environment.BASE_URI;

  constructor(private httpClient: HttpClient) { }

  saveContract(contract): Observable<any> {
    return this.httpClient.post(this.BASE_URI + 'contract', contract);
  }
  getContracts(): Observable<any> {
    return this.httpClient.get<any>(this.BASE_URI + 'contract');
  }

}
