import { ROUTES } from './app.routes';
import { HeaderModule } from './header/header.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeaderModule,
    RouterModule.forRoot(ROUTES),
    MatNativeDateModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDo4hxEc1tQbsmrjV7pGp6B0dvSJQgKr2s',
  authDomain: 'administracao-paroquia.firebaseapp.com',
  projectId: 'administracao-paroquia',
  storageBucket: 'administracao-paroquia.appspot.com',
  messagingSenderId: '108130064605',
  appId: '1:108130064605:web:76ada8b062df1d7afd6334',
  measurementId: 'G-H95NJ6W8DV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
