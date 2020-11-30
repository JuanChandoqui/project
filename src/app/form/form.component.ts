import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup, Validators} from '@angular/forms';
import { SignupService } from 'src/app/services/signup.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  signUpFormGroup : FormGroup;

  constructor(private _signUpService: SignupService, private _formBuilder: FormBuilder, private _router: Router) {

  }

  ngOnInit(): void {
    this.signUpFormGroup = this._formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signUp(): void{
    const data = this.signUpFormGroup.value;
    if(data.email && data.password && data.username){
      this._signUpService.register(data.username, data.password, data.email).subscribe(access =>{
        console.log(access);
        this._router.navigate(['login']);
        //console.log("Datos Validos");
      }, error=>{
        console.log("Datos invalidos")
      }
      );
    }
  }

}
