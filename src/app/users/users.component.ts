import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';

import { FormBuilder ,FormGroup, Validators} from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  registerFormGroup: FormGroup;
  updateFormGroup: FormGroup;
  deleteFormGroup: FormGroup;
  statusUpdate: Boolean = false;
  statusDelete: Boolean = false;
  status: Boolean = false;
  users = [];
  info = "No hay datos";

  constructor(private _userService : UserService,  private _formBuilder: FormBuilder, private _router: Router) {
  }

  ngOnInit(): void {
    this._userService.getListUser().subscribe((data : any []) =>{
      console.log(data);
      this.users = data;
    });

    this.registerFormGroup = this._formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', Validators.required]
    });

    this.deleteFormGroup = this._formBuilder.group({
      id: ['', Validators.required]
    })

    this.updateFormGroup = this._formBuilder.group({
      id: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  addUser(): void{
    const data = this.registerFormGroup.value;
    if(data.first_name && data.last_name && data.age && data.email){
      data.age = Number(data.age) //<-- parse String to Number

      if(data.age > 0){
        this._userService.postUser(data.first_name, data.last_name, data.email, data.age, 1).subscribe(access =>{
        console.log(access);
        this._router.navigate(['users'])
        .then(() => {
          window.location.reload();
        });
        }, error=>{
          console.log("Datos invalidos")
        });
      }
    }
  }  

  updateUser(): void{
    const data = this.updateFormGroup.value;
    if(data.id && data.first_name && data.last_name && data.email && data.age){    
        data.id = Number(data.id) //<-- parse String to Number
        data.age = Number(data.age) //<-- parse String to Number

      if(data.id>0){
        this._userService.putUser(data.id, data.first_name, data.last_name, data.email, data.age).subscribe(access =>{
        console.log(access);
        this._router.navigate(['users'])
        .then(() => {
          window.location.reload();
        });
        }, error=>{
          console.log("Datos invalidos")
        });
      }
    }
  }


  deleteUser(): void{
    const data = this.deleteFormGroup.value;
    if(data.id){
      data.id = Number(data.id) //<-- parse String to Number

      if(data.id > 0){
        this._userService.deleteUser(data.id).subscribe(access =>{
        console.log(access);
        this._router.navigate(['users'])
        .then(() => {
          window.location.reload();
        });
        }, error=>{
          console.log("Datos invalidos")
        });
      }
    }
  }

  showBoxAdd(){
    this.status = !this.status;   //show register box
    this.statusDelete = false; //hide delete box
    this.statusUpdate = false;
  }

  //ocultar div de registro
  hideBoxAdd(){
    this.status = false; //hide register box
    this.statusUpdate = false;
    this.statusDelete = !this.statusDelete; //show box delete
  }

  showBoxUpdate(){
    this.statusUpdate = !this.statusUpdate;
    this.status = false;
    this.statusDelete = false;
  }

  //desactive register & delete box
  hideBoxs(){
    this.status = false;
    this.statusDelete = false;
    this.statusUpdate = false;
  }
}