import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Categoria } from 'src/app/models/categoria';
import { ProdutoDTO } from 'src/app/models/produto.dto';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-create-produto',
  templateUrl: './create-produto.component.html',
  styleUrls: ['./create-produto.component.scss']
})
export class CreateProdutoComponent {
  produto: ProdutoDTO;
  isEditMode: boolean = false;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.produto = {
      codigo: '',
      nome: '',
      categoria: '',
      preco: 0,
      descricao: '',
      ativo: true,
      tempoPreparoEmMinutos: 0
    };
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const codigo = params['codigo'];
      if (codigo) {
        this.isEditMode = true;
        this.apiService.buscarProdutoPorCodigo(codigo).subscribe(produto => {
          this.produto = produto;
        });
      }
    });
  }

  salvarProduto() {
    if (this.isEditMode) {
      this.apiService.atualizarProduto(this.produto).subscribe(response => {
        console.log('Produto atualizado:', response);
        this.router.navigate(['/buscar-produtos']);
      });
    } else {
      this.apiService.criarProduto(this.produto).subscribe(response => {
        console.log('Produto criado:', response);
        this.router.navigate(['/buscar-produtos']);
      });
    }
  }
  cancelar() {
    this.router.navigate(['/buscar-produtos']);
  }
}
