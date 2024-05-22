import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClienteDTO } from '../models/cliente.dto';
import { ProdutoDTO } from '../models/produto.dto';
import { CadastroPedidoDTO, PedidoDTO } from '../models/pedido.dto';
import { Checkout } from '../models/checkout.dto';
import { PixResponseDTO } from '../models/pix-response.dto';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8080';  // Ajuste para a URL do seu backend

  constructor(private http: HttpClient) { }

  // Cliente
  criarCliente(cliente: ClienteDTO): Observable<ClienteDTO> {
    return this.http.post<ClienteDTO>(`${this.baseUrl}/clientes`, cliente);
  }

  buscarClientes(): Observable<ClienteDTO[]> {
    return this.http.get<ClienteDTO[]>(`${this.baseUrl}/clientes`);
  }

  // Produto
  criarProduto(produto: ProdutoDTO): Observable<ProdutoDTO> {
    return this.http.post<ProdutoDTO>(`${this.baseUrl}/produtos`, produto);
  }

  atualizarProduto(produto: ProdutoDTO): Observable<ProdutoDTO> {
    return this.http.patch<ProdutoDTO>(`${this.baseUrl}/produtos/${produto.codigo}`, produto);
  }

  buscarProdutos(): Observable<ProdutoDTO[]> {
    return this.http.get<ProdutoDTO[]>(`${this.baseUrl}/produtos`);
  }
  buscarProdutoPorCodigo(codigo: string): Observable<ProdutoDTO> {
    return this.http.get<ProdutoDTO>(`${this.baseUrl}/produtos/${codigo}`);
  }

  // Pedido
  criarPedido(pedido: CadastroPedidoDTO): Observable<PedidoDTO> {
    return this.http.post<PedidoDTO>(`${this.baseUrl}/pedidos`, pedido);
  }

  buscarPedido(codigo: string): Observable<PedidoDTO> {
    return this.http.get<PedidoDTO>(`${this.baseUrl}/pedidos/${codigo}`);
  }

  buscarTodosPedidos(): Observable<PedidoDTO[]> {
    return this.http.get<PedidoDTO[]>(`${this.baseUrl}/pedidos`);
  }
  
  buscarPedidosEmProgresso(): Observable<PedidoDTO[]> {
    return this.http.get<PedidoDTO[]>(`${this.baseUrl}/pedidos/em-progresso`);
  }
  

  // Checkout
  realizarCheckout(checkout: Checkout): Observable<PixResponseDTO> {
    return this.http.post<PixResponseDTO>(`${this.baseUrl}/checkout`, checkout);
  }

  avancarStatusPedido(codigoPedido: string): Observable<void> {
    return this.http.patch<void>(`${this.baseUrl}/pedidos/${codigoPedido}`, {});
  }
}
