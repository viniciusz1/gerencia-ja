import { style } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})

export class PedidosComponent implements OnInit {

  constructor() { }

  Ldados = JSON.parse(localStorage.getItem("Ldados"));
  user = localStorage.getItem('user')

  status="Aberto"
  
  removerPedido(index) {
    this.Ldados[index].deleted = true;
    localStorage.setItem("Ldados", JSON.stringify(this.Ldados));
    console.log(index)

  }
  fechaOrcamento(){
    this.status="Fechado"
    
    
  }
  ngOnInit() {
    if(this.Ldados == null){
      this.status='Sem nenhum Pedido'
    }
  }
  total = localStorage.getItem('total')
}

