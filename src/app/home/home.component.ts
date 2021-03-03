import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FirebaseService} from './../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // needed to send data to the parent (AppComponent)
  @Output() isLoggout = new EventEmitter<void>()

  constructor(public firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }

  logout(){
    this.firebaseService.logout();
    //because of void declaration, we don't have to pass anything
    this.isLoggout.emit();
  }
}
