import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { RouterModule, Routes } from '@angular/router';
import { GerenciarClientesComponent } from './clientes/gerenciar-clientes/gerenciar-clientes.component';
import { GerenciarPedidosComponent } from './pedidos/gerenciar-pedidos/gerenciar-pedidos.component';
import { GerenciarProdutosComponent } from './produtos/gerenciar-produtos/gerenciar-produtos.component';
import { ProdutoComponent } from './produtos/produto/produto.component';

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
          { path: 'gerenciar-produtos', component: GerenciarProdutosComponent },
          { path: ':idProduto', component: ProdutoComponent },
        ]
      },
      {
        path: 'clientes', 
        children: [
          { path: '', component: ClientesComponent },
          { path: 'gerenciar-clientes', component: GerenciarClientesComponent },
        ]
      },
      {
        path: 'pedidos', 
        children: [
          { path: '', component: PedidosComponent},
          { path: 'gerenciar-pedidos', component: GerenciarPedidosComponent },
        ]
      }
    ]
  }
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: [PedidosComponent, ClientesComponent, ProdutosComponent, TelaPrincipalComponent, GerenciarClientesComponent, GerenciarPedidosComponent, GerenciarProdutosComponent, ProdutoComponent]
})
export class ConteudoModule { }
