import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { e } from '@angular/core/src/render3';
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
  Tdados = JSON.parse(localStorage.getItem("Tdados"));
  nome= "";
  preco;
  editarProduto(id) {
    this.router.navigate(['loja/produtos/', id])    
    localStorage.setItem("dados", JSON.stringify(this.Tdados[id-1])); 
  }
  removerProduto(index){
    this.Tdados[index].deleted= true;
    localStorage.setItem("Tdados", JSON.stringify(this.Tdados)); 
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
      id: this.Tdados.length+1,
      deleted: false
    }

    this.Tdados.push(objeto)
    this.clicou= false;
    localStorage.setItem("Tdados", JSON.stringify(this.Tdados));
  }
  listaCarrinho;
  adicionar;
  testando = []
  adicionarCarrinho(i){
    this.listaCarrinho.push(this.Tdados[i])
    localStorage.setItem("Ldados", JSON.stringify(this.listaCarrinho));
    console.log(this.listaCarrinho)        
  }
}
