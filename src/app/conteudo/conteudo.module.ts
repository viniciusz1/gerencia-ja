import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PedidosComponent, ClientesComponent, ProdutosComponent, TelaPrincipalComponent]
})
export class ConteudoModule { }
