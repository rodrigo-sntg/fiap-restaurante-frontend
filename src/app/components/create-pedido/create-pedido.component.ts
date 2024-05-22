import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CadastroPedidoDTO } from '../../models/pedido.dto';
import { ClienteDTO } from '../../models/cliente.dto';
import { ProdutoDTO } from '../../models/produto.dto';

@Component({
  selector: 'app-create-pedido',
  templateUrl: './create-pedido.component.html',
  styleUrls: ['./create-pedido.component.scss']
})
export class CreatePedidoComponent implements OnInit {
  pedido: CadastroPedidoDTO;
  clientes: ClienteDTO[] = [];
  produtos: ProdutoDTO[] = [];

  constructor(private apiService: ApiService, private router: Router) {
    this.pedido = {
      itens: [],
      cpf: ''
    };
  }

  ngOnInit(): void {
    this.apiService.buscarClientes().subscribe(clientes => {
      this.clientes = clientes;
    });

    this.apiService.buscarProdutos().subscribe(produtos => {
      this.produtos = produtos;
    });
  }

  salvarPedido() {
    this.apiService.criarPedido(this.pedido).subscribe(response => {
      console.log('Pedido criado:', response);
      this.router.navigate(['/buscar-pedidos']);
    });
  }

  adicionarItem() {
    this.pedido.itens.push({
      codigoProduto: '',
      customizacao: ''
    });
  }

  cancelar() {
    this.router.navigate(['/buscar-pedidos']);
  }
}
