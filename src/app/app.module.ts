import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AlertService } from './shared/components/alert/alert.service';
import { ROUTES } from './app.routes';
import { HeaderModule } from './header/header.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatNativeDateModule } from '@angular/material/core';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeaderModule,
    RouterModule.forRoot(ROUTES),
    MatNativeDateModule,
    HttpClientModule,
    MatSnackBarModule,
  ],
  bootstrap: [AppComponent],
  providers: [AlertService],
})
export class AppModule {}
