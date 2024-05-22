import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoDTO } from 'src/app/models/produto.dto';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-buscar-produtos',
  templateUrl: './buscar-produtos.component.html',
  styleUrls: ['./buscar-produtos.component.scss']
})
export class BuscarProdutosComponent implements OnInit {
  produtos: ProdutoDTO[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.buscarProdutos().subscribe(produtos => {
      this.produtos = produtos;
    });
  }

  editarProduto(codigo: string) {
    this.router.navigate(['/editar-produto', codigo]);
  }
}