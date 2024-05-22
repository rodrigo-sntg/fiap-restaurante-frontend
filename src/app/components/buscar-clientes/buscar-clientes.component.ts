import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ClienteDTO } from '../../models/cliente.dto';

@Component({
  selector: 'app-buscar-clientes',
  templateUrl: './buscar-clientes.component.html',
  styleUrls: ['./buscar-clientes.component.scss']
})
export class BuscarClientesComponent implements OnInit {
  clientes: ClienteDTO[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.buscarClientes().subscribe(clientes => {
      this.clientes = clientes;
    });
  }
}
