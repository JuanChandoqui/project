import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

//new elements 13/10/2020

import { FormBuilder ,FormGroup, Validators} from '@angular/forms';

import { AuthServiceService } from 'src/app/services/auth/auth-service.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  //new elements 13/10/2020
  loginFormGroup: FormGroup;

  //new elements 13/10/2020 -> parameters and condition if
  constructor (private authService: AuthService, private _formBuilder: FormBuilder, private _authServiceService: AuthServiceService, private _router: Router){ 
    //el servicio estara activo en la pagina
    
    if(_authServiceService.isAuthenticated()){
      _router.navigate(['users'])
    }
    
  }

  ngOnInit(): void {    
      //new elements 13/10/2020
    this.loginFormGroup = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    
  }

  loginwithGoogle() {
    this.authService.loginGoogle();
    document.getElementById("botonMainMenu").removeAttribute("disabled");
  }
  
   //new elements 13/10/2020
  login(): void{
    const data = this.loginFormGroup.value;
    if(data.email && data.password){
      this._authServiceService.login(data.email, data.password).subscribe(access =>{
        console.log(access);
        localStorage.setItem('user', JSON.stringify(access));
        this._router.navigate(['users']);
        //console.log("Datos Validos");
      }, error=>{
        console.log("Datos invalidos")
      }
      );
    }
  }
  
}
