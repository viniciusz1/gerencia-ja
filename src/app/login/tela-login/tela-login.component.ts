import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  constructor(private router: Router) { }
  listaProdutos = [
    {nome: 'Dicionário', id: 1, preco: 123, deleted: false},
    {nome: 'Livro de Matemárica', id: 2, preco: 23, deleted: false},
    {nome: 'Teclado', id: 3, preco: 13, deleted: false},
    {nome: 'Raquete de tênis', id: 4, preco: 12, deleted: false},

  ]
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
      localStorage.setItem("Tdados", JSON.stringify(this.listaProdutos)); 
      this.router.navigate(['/tela-principal'])
    }
  }
}
  ngOnInit() {
      }

}
