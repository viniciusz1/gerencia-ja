import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor() { }

lista = localStorage.getItem('Ldados')
usuario = localStorage.getItem('user')
  ngOnInit() {
    console.log(this.lista)
  }

}
