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
    1, 2, 3, 4, 5, 6, 7
  ]
  abrirProduto(idProduto) {
    this.router.navigate(['loja/produtos/', idProduto])
  }
  abrirGerenciarProdutos(){
    this.router.navigate(['loja/produtos/gerenciar-produtos'])
  }
}
