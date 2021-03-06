import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Resolve } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
 
export interface IMessage {
  name?: string,
  email?: string,
  message?: string
}
 
@Injectable()
export class EmailService {
  private emailUrl = 'app/email.php';
 
  constructor(private http: Http) {
 
  }
 
  sendEmail(model: IMessage): Observable<IMessage> | any {
    return this.http.post(this.emailUrl, model)
      .map(response => {
        console.log('EMAIL SERVICE');
        console.log('Sending email was successfull', response);
        return response;
      })
      .catch(error => {
        console.log('Sending email got error', error);
        return Observable.throw(error)
      })
  }
}