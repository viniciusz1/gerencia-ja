import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  constructor(private router: Router) { }
users = [
  {user: 'eu', password: 'eu'},
  {user: 'Pedro', password: 'pedro123'},
  {user: 'Ana', password: 'ana123'}
]
user = ''
password = ''


verifica(){
  for(let i of this.users){
    if(i.user == this.user && i.password == this.password){
      localStorage.setItem('user', this.user)
      localStorage.setItem('password', this.password)
      this.router.navigate(['/tela-principal'])
    }
  }
}
  ngOnInit() {
  }

}
