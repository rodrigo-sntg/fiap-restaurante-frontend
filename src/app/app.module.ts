import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';  // Adicione este
import { MatListModule } from '@angular/material/list';  // Adicione isto
import { MatDividerModule } from '@angular/material/divider';  // Adicione isto
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';


import { AppComponent } from './app.component';
import { CreateClienteComponent } from './components/create-cliente/create-cliente.component';
import { CreateProdutoComponent } from './components/create-produto/create-produto.component';
import { CreatePedidoComponent } from './components/create-pedido/create-pedido.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { StatusPedidoComponent } from './components/status-pedido/status-pedido.component';
import { AppRoutingModule } from './app-routing.module';
import { BuscarPedidosComponent } from './components/buscar-pedidos/buscar-pedidos.component';
import { BuscarProdutosComponent } from './components/buscar-produtos/buscar-produtos.component';
import { BuscarClientesComponent } from './components/buscar-clientes/buscar-clientes.component';
import { PedidosEmProgressoComponent } from './components/pedidos-em-progresso/pedidos-em-progresso.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateClienteComponent,
    CreateProdutoComponent,
    CreatePedidoComponent,
    CheckoutComponent,
    StatusPedidoComponent,
    BuscarPedidosComponent,
    BuscarProdutosComponent,
    BuscarClientesComponent,
    PedidosEmProgressoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatListModule,
    MatDividerModule,
    MatExpansionModule,
    MatSidenavModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
