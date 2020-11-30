import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  api = 'http://localhost:7000/api/v1/register/';

  constructor(private http: HttpClient) { 

  }
 
  register(username: string, password: string, email: string): Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders ({
        'Content-Type' : 'application/json',
      })
    };
    console.log(this.api);
    return this.http.post(this.api, {username, password, email}, httpOptions);
    //return this.http.get('${this.api}api/v1/login/', httpOptions);
  }
  
}
