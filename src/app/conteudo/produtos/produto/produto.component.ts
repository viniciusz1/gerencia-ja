import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  @Input() lista;
  constructor(private route: ActivatedRoute,
    private router: Router) {
    //this.lista = route.snapshot.paramMap.get('listaProdutos')
 }
 nome=""
 preco=""
 registrarProduto(){
   console.log(this.lista)
  let objeto = {
    nome: this.nome,
  preco: this.preco,
  deleted: false,
  id: 5
}


this.lista.push(objeto)
this.nome = ''
this.preco = ''

}
  ngOnInit() {
  }
}
