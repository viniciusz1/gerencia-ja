import { getLocaleDayPeriods } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  constructor(private route: ActivatedRoute,
    private router: Router) {
    //this.lista = route.snapshot.paramMap.get('listaProdutos')
  }
  dados = JSON.parse(localStorage.getItem("dados"));
  Tdados = JSON.parse(localStorage.getItem("Tdados"));
  nome = this.dados.nome
  preco = this.dados.preco
  id = this.dados.id;


  editarProduto() {
    let objeto = {
      nome: this.nome,
      preco: this.preco,
      deleted: false,
      id: this.id
    }
    this.Tdados.push(objeto)
    this.nome = ''
    this.preco = ''
    this.Tdados.splice(this.id - 1, 1);
    localStorage.setItem("Tdados", JSON.stringify(this.Tdados));
    this.router.navigate(['loja/produtos'])
  }

  ngOnInit() {
    this.dados = JSON.parse(localStorage.getItem("dados"));
    this.Tdados = JSON.parse(localStorage.getItem("Tdados"));
    this.nome = this.dados.nome
    this.preco = this.dados.preco
    this.id = this.dados.id;
  }
}
