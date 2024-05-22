import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { PedidoDTO } from '../../models/pedido.dto';

@Component({
  selector: 'app-status-pedido',
  templateUrl: './status-pedido.component.html',
  styleUrls: ['./status-pedido.component.scss']
})
export class StatusPedidoComponent {
  codigoPedido: string;
  pedido: PedidoDTO | undefined;

  constructor(private apiService: ApiService) {
    this.codigoPedido = '';
  }

  buscarPedido() {
    this.apiService.buscarPedido(this.codigoPedido).subscribe(response => {
      this.pedido = response;
      console.log('Pedido encontrado:', response);
    });
  }
}
