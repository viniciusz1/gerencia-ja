import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ LoginModule } from './login/login.module'
import { AppComponent } from './app.component';
import { TelaLoginComponent } from './login/tela-login/tela-login.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: TelaLoginComponent,
        canActivate: []
      }
    ]),
    BrowserModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
