import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { PedidoDTO } from '../../models/pedido.dto';

@Component({
  selector: 'app-pedidos-em-progresso',
  templateUrl: './pedidos-em-progresso.component.html',
  styleUrls: ['./pedidos-em-progresso.component.scss']
})
export class PedidosEmProgressoComponent implements OnInit {
  pedidos: PedidoDTO[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.buscarPedidosEmProgresso().subscribe((data: PedidoDTO[]) => {
      this.pedidos = data;
    });
  }

  carregarPedidos(): void {
    this.apiService.buscarPedidosEmProgresso().subscribe((data: PedidoDTO[]) => {
      this.pedidos = data;
    });
  }
  
  avancarStatusPedido(codigoPedido: string): void {
    this.apiService.avancarStatusPedido(codigoPedido).subscribe(() => {
      this.carregarPedidos(); // Recarregar a lista de pedidos após avançar o status
    });
  }
}
