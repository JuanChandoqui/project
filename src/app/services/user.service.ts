import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  api  = 'https://deployback.herokuapp.com/api/v1/user/userProfile_url/';

  constructor(private http: HttpClient) { }

  getListUser():  Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders ({
        'Content-Type' : 'application/json',
        'Accept': 'application/json' ,
      })
    }

    console.log(this.api);
    return this.http.get(this.api, httpOptions) 
  }

  PutUser(first_name: string, last_name: string, email: string, age: number, userModel : number){
    const httpOptions = {
      headers : new HttpHeaders ({
        'Content-Type' : 'application/json',
        'Accept': 'application/json' ,
      })
    }

    console.log(this.api);
    return this.http.put(this.api, {first_name, last_name, email, age, userModel}, httpOptions) 
  }

  deleteUser(idUser: number){
    const httpOptions = {
        headers : new HttpHeaders ({
          'Content-Type' : 'application/json',
          'Accept': 'application/json' ,
        })
    }
    console.log(this.api);
    return this.http.delete(this.api+idUser+'/', httpOptions)
  }
}
