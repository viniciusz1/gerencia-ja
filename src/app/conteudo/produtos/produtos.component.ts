import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { e } from '@angular/core/src/render3';
@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  @Output() listaProdutos = [
    {nome: 'poi', id: 1, preco: 123, deleted: false},
    {nome: 'pasdfi', id: 2, preco: 23, deleted: false},
    {nome: 'poasdfdfdi', id: 3, preco: 13, deleted: false},
    {nome: 'poidfds', id: 14, preco: 12, deleted: false},

  ]
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
      
  nome= "";
  preco;
  editarProduto(id) {
    this.router.navigate(['loja/produtos/', id])
  }
  removerProduto(index){
    this.listaProdutos[index].deleted= true;
    console.log(index)
  }
  clicou =false;
  adicionarProduto(){
    this.clicou = true;
  }
  produtoAdicionado(){
    let objeto= {
      nome: this.nome,
      preco: this.preco,
      id: this.listaProdutos.length+1,
      deleted: false
    }

    this.listaProdutos.push(objeto)
    this.clicou= false;
  }
}
