import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  listaProdutos = [
    {nome: 'poi', id: 1, preco: 123, deleted: false},
    {nome: 'pasdfi', id: 2, preco: 23, deleted: false},
    {nome: 'poasdfdfdi', id: 3, preco: 13, deleted: false},
    {nome: 'poidfds', id: 14, preco: 12, deleted: false},

  ]
  abrirProduto(idProduto) {
    this.router.navigate(['loja/produtos/', idProduto])
  }
  removerProduto(index){
    this.listaProdutos[index].deleted= true;
    console.log(index)
  }
}
