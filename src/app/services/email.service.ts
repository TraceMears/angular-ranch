import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MailMessage } from '../common/mail-message';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private emailUrl = 'http://localhost:8080/send-mail'; 

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': `${sessionStorage.getItem('auth-token')}`
      })
  };

  sendEmail(mailMessage: MailMessage) {
    if(mailMessage!=null) {    
      this.httpClient.post(this.emailUrl, mailMessage, this.httpOptions).subscribe();
    } 
  }
}
