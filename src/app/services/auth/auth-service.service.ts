import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  api = 'https://back193242.herokuapp.com/api/v1/login/';
  constructor(private http: HttpClient) { 
  }

  isAuthenticated (): boolean {
    let user = JSON.parse(localStorage.getItem('user'));

    if(user){
      return user['token'] ? true : false;
    }else{
        return false;
    }
  }

  login(username: string, password: string ): Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders ({
        'Content-Type' : 'application/json',
      })
    };
    console.log(this.api);
    return this.http.post(this.api, {username, password}, httpOptions);
    //return this.http.get('${this.api}api/v1/login/', httpOptions);
  }
}
