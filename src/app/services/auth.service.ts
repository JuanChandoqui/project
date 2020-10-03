import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";
  
@Injectable({
  providedIn: 'root'
})

export class AuthService {

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