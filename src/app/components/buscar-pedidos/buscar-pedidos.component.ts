import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PedidoDTO } from 'src/app/models/pedido.dto';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-buscar-pedidos',
  templateUrl: './buscar-pedidos.component.html',
  styleUrls: ['./buscar-pedidos.component.scss']
})
export class BuscarPedidosComponent implements OnInit {
  pedidos: any[] = [];

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.buscarPedidos();
  }

  buscarPedidos() {
    this.apiService.buscarTodosPedidos().subscribe((response: any[]) => {
      this.pedidos = response;
      console.log('Pedidos encontrados:', response);
    });
  }

  irParaCheckout(codigoPedido: string) {
    this.router.navigate(['/checkout'], { queryParams: { codigoPedido } });
  }
}