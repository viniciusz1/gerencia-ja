import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrls: ['./tela-principal.component.css']
})
export class TelaPrincipalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  pedidos(){
    this.router.navigate(['loja/pedidos'])
  }
  produtos(){
    this.router.navigate(['loja/produtos'])
  }
  clientes(){
    this.router.navigate(['loja/clientes'])
  }
//   gpe(){
//     this.router.navigate(['loja/pedidos/gerenciar-pedidos'])
//   }
//   gro(){
//     this.router.navigate(['loja/produtos/gerenciar-produtos'])
//   }
//   cli(){
//     this.router.navigate(['loja/clientes/gerenciar-clientes'])
//   }
//   <button (click)='gpe()'>gpe</button>
// <button (click)='gro()'>gro</button>
// <button (click)='cli()'>cli</button>
}
