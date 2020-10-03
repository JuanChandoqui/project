import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
  
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  firebase = require('firebase');

  //console.log(firebase.auth); // Undefined
  //console.log(firebase.default.auth); // Function

  constructor(private Auth: AngularFireAuth) {
  }

  googleProvider = new auth.GoogleAuthProvider;
  
  loginGoogle() {
    this.Auth.signInWithPopup(this.googleProvider).then((result) => {
        console.log(result);
      })
      .catch(err => {
        console.log(err.message);
      })
  }
}