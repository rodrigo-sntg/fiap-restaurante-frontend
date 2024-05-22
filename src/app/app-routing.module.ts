import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateClienteComponent } from './components/create-cliente/create-cliente.component';
import { CreateProdutoComponent } from './components/create-produto/create-produto.component';
import { CreatePedidoComponent } from './components/create-pedido/create-pedido.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { StatusPedidoComponent } from './components/status-pedido/status-pedido.component';
import { BuscarPedidosComponent } from './components/buscar-pedidos/buscar-pedidos.component';
import { BuscarProdutosComponent } from './components/buscar-produtos/buscar-produtos.component';
import { BuscarClientesComponent } from './components/buscar-clientes/buscar-clientes.component';
import { PedidosEmProgressoComponent } from './components/pedidos-em-progresso/pedidos-em-progresso.component';

const routes: Routes = [
  { path: 'create-cliente', component: CreateClienteComponent },
  { path: 'create-produto', component: CreateProdutoComponent },
  { path: 'editar-produto/:codigo', component: CreateProdutoComponent },
  { path: 'create-pedido', component: CreatePedidoComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'status-pedido', component: StatusPedidoComponent },
  { path: 'buscar-pedidos', component: BuscarPedidosComponent },
  { path: 'buscar-produtos', component: BuscarProdutosComponent },
  { path: 'buscar-clientes', component: BuscarClientesComponent },
  { path: 'pedidos-em-progresso', component: PedidosEmProgressoComponent },

  { path: '', redirectTo: '/buscar-pedidos', pathMatch: 'full' },
  { path: '**', redirectTo: '/buscar-pedidos' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
