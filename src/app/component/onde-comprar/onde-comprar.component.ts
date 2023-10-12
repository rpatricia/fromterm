import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-onde-comprar',
  templateUrl: './onde-comprar.component.html',
  styleUrls: ['./onde-comprar.component.scss']
})
export class OndeComprarComponent {
  cep!: string;
  address: any;

  constructor(private http: HttpClient) {}

  searchByCep(): void {
    if (this.cep && this.cep.length === 8) {  // Verifica se o CEP tem 8 caracteres
      this.http.get(`https://viacep.com.br/ws/${this.cep}/json/`).subscribe(
        data => {
          this.address = data;
        },
        error => {
          console.error('Erro ao buscar CEP:', error);
        }
      );
    } else {
      console.warn('CEP inválido.');
    }
  }
}
