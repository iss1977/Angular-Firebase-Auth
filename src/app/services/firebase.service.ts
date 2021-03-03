import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false;

  constructor(public angularFireAuth: AngularFireAuth) { }

  async signin(user: string , password: string){
    await this.angularFireAuth.signInWithEmailAndPassword(user, password)
    .then(res => {
      this.isLoggedIn = true
      localStorage.setItem('user', JSON.stringify(res.user))
    })
  }

  async signup(user: string , password: string){
    await this.angularFireAuth.createUserWithEmailAndPassword(user, password)
    .then(res => {
      this.isLoggedIn = true
      localStorage.setItem('user', JSON.stringify(res.user))
    })
  }

  logout(){
    this.angularFireAuth.signOut();
    localStorage.removeItem('user')
  }
}
