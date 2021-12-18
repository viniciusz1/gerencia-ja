import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'loja',
    canActivate: [],
    children: [
      { path: '', component: PaginaPrincipalComponent },
      {
        path: 'produto',
        children: [
          { path: '', component: ProdutosComponent },
          { path: ':id', component: ProdutoComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([

      {
        path: 'pedidos',
        component: PedidosComponent,
        canActivate: []
      }

    ])
  ],
  declarations: [PedidosComponent, ClientesComponent, ProdutosComponent, TelaPrincipalComponent]
})
export class ConteudoModule { }
