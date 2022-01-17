import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor() { }

  Ldados = JSON.parse(localStorage.getItem("Ldados"));
  user = localStorage.getItem('user')
  ngOnInit() {
    console.log(this.Ldados)

  }

}
