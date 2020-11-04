import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { Employee } from '../common/employee';
import { User } from '../common/user';

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text'});
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text'});
  }

  getCustomerBoard(): Observable<any> {
    return this.http.get(API_URL + 'cust', { responseType: 'text'});
  }

  getEmployeeBoard(): Observable<any> {
    return this.http.get(API_URL + 'emp', { responseType: 'text'});
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text'});
  }

  getEmployeesList(): Observable<Employee[]> {
    const getUrl = `http://localhost:8080/ranch/users/search/findEmployees`;

    return this.http.get<GetResponse>(getUrl).pipe(
                                              map(response => response._embedded.users)
                                              );    
  }
}

interface GetResponse {
  _embedded: {
    users: Employee[];
  }  
}