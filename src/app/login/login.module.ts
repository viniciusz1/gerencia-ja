import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TelaPrincipalComponent } from '../conteudo/tela-principal/tela-principal.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'tela-principal',
        component: TelaPrincipalComponent,
        canActivate:[]
      }
    ])
 
  ],
  declarations: [TelaLoginComponent]
})
export class LoginModule { }
