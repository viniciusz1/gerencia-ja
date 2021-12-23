import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-gerenciar-produtos',
  templateUrl: './gerenciar-produtos.component.html',
  styleUrls: ['./gerenciar-produtos.component.css']
})
export class GerenciarProdutosComponent implements OnInit {
idProduto;
  constructor(private route: ActivatedRoute,
    private router: Router) {
    this.idProduto = route.snapshot.paramMap.get('idProduto') }

    console(idProduto){
         alert(idProduto)
       }
  ngOnInit() {
  }

}
