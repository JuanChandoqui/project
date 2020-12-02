import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  api = 'http://catmusic.ddns.net/';

  constructor(private http: HttpClient) { 

  }
 
  register(username: string, password: string, email: string): Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders ({
        'Content-Type' : 'application/json',
      })
    };
    console.log(this.api);
    return this.http.post(this.api.concat('api/v1/register/'), {username, password, email}, httpOptions);
  }
  
}
