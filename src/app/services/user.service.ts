import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //api  = 'https://deployback.herokuapp.com/api/v1/user/userProfile_url/';
  api = 'http://localhost:7000/';

  constructor(private http: HttpClient) { 

  }

  getListUser():  Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders ({
        'Content-Type' : 'application/json',
        'Accept': 'application/json' ,
      })
    }
    return this.http.get(this.api.concat('api/v1/user/userProfile_url/'), httpOptions) 
  }

  
  postUser(first_name: string, last_name: string, email: string, age: number, userModel : number){   
    const httpOptions = {
      headers : new HttpHeaders ({
        'Content-Type' : 'application/json',
        'Accept': 'application/json' ,
      })
    }
    return this.http.post(this.api.concat('api/v1/user/userProfile_url/'), {first_name, last_name, email, age, userModel}, httpOptions) 
  }  

  putUser(idUser: number,first_name: string, last_name: string, email: string, age: number): Observable<any>{
    const httpOptions = {
        headers : new HttpHeaders ({
          'Content-Type' : 'application/json',
          'Accept': 'application/json' ,     
        }),
    }
    return this.http.put(this.api.concat('api/v1/user/userProfile_url/'), {'id': idUser,'first_name':first_name,'last_name': last_name,'email': email,'age': age}, httpOptions)
  }

  deleteUser(idUser: number){
    const httpOptions = {
        headers : new HttpHeaders ({
          'Content-Type' : 'application/json',
          'Accept': 'application/json' ,
        }),
        body: {
          id: idUser,
        },
    }
    return this.http.delete(this.api.concat('api/v1/user/userProfile_url/'), httpOptions)
  }

}
