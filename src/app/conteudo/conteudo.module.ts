import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoComponent } from './produtos/produto/produto.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'loja',
    canActivate: [],
    children: [
      { path: '', component: TelaPrincipalComponent },
      {
        path: 'produtos',
        children: [
          { path: '', component: ProdutosComponent, },
          { path: ':idProduto', component: ProdutoComponent },
        ]
      },
      {
        path: 'clientes', 
        children: [
          { path: '', component: ClientesComponent }
        ]
      },
      {
        path: 'pedidos', 
        children: [
          { path: '', component: PedidosComponent}
        ]
      }
    ]
  }
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule
  ],
  declarations: [PedidosComponent, ClientesComponent, ProdutosComponent, TelaPrincipalComponent, ProdutoComponent]
})
export class ConteudoModule { }
