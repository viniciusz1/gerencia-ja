import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ LoginModule } from './login/login.module'
import { AppComponent } from './app.component';
import { TelaLoginComponent } from './login/tela-login/tela-login.component';
import { RouterModule } from '@angular/router';
import { ConteudoModule } from './conteudo/conteudo.module';
import { FormsModule } from '@angular/forms';


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
    LoginModule,
    ConteudoModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
