import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Checkout } from '../../models/checkout.dto';
import { PixResponseDTO } from '../../models/pix-response.dto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  checkout: Checkout = new Checkout();
  pixResponse!: PixResponseDTO;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['codigoPedido']) {
        this.checkout.codigoPedido = params['codigoPedido'];
      }
    });
  }

  realizarCheckout() {
    this.apiService.realizarCheckout(this.checkout).subscribe(response => {
      this.pixResponse = response;
      console.log('Checkout realizado com sucesso:', response);
      // Adicione aqui o que deve acontecer após o checkout
    });
  }
}
