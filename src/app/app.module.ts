import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FirebaseService } from './services/firebase.service';

const config ={
  apiKey: "AIzaSyD2G8qs2rPJKB-DXxXCZO-iepp3tK88u78",
  authDomain: "angular-test-da2c9.firebaseapp.com",
  databaseURL: "https://angular-test-da2c9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "angular-test-da2c9",
  storageBucket: "angular-test-da2c9.appspot.com",
  messagingSenderId: "822215967559",
  appId: "1:822215967559:web:5e4e598982e4639fd70262",
  measurementId: "G-EF1KPSFF1N"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
