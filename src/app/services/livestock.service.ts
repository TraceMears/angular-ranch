import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { Livestock } from '../common/livestock';

@Injectable({
  providedIn: 'root'
})
export class LivestockService {
 
  private livestockUrl = 'http://localhost:8080/ranch/livestocks';

  constructor(private httpClient: HttpClient ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  getLivestockList(): Observable<Livestock[]> {
    return this.httpClient.get<GetResponse>(this.livestockUrl).pipe(
                                            map(response => response._embedded.livestocks)
                                            );    
  }

  updateWeight(stock: Livestock) {
    const putUrl = `http://localhost:8080/ranch/livestocks/${stock.stock_id}`;
    return this.httpClient.put(putUrl, stock, this.httpOptions).subscribe();
  }
}

interface GetResponse {
  _embedded: {
    livestocks: Livestock[];
  }  
}