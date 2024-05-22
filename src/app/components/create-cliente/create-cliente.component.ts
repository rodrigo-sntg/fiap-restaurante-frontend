import { Component } from '@angular/core';
import { ClienteDTO } from '../../models/cliente.dto';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.scss']
})
export class CreateClienteComponent {
  cliente: ClienteDTO;

  constructor(private apiService: ApiService, private router: Router) {
    this.cliente = {
      nome: '',
      cpf: '',
      email: ''
    };
   }

  salvarCliente() {
    this.apiService.criarCliente(this.cliente).subscribe(response => {
      console.log('Cliente criado:', response);
      this.router.navigate(['/buscar-clientes']);
    });
  }

  cancelar() {
    this.router.navigate(['/buscar-clientes']);
  }
}