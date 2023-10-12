import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-representantes',
  templateUrl: './representantes.component.html',
  styleUrls: ['./representantes.component.scss']
})
export class RepresentantesComponent {
  cep!: string;
  address: any;

  constructor(private http: HttpClient) {}

  searchByCep(): void {
    this.http.get(`https://viacep.com.br/ws/${this.cep}/json/`).subscribe(
      data => {
        this.address = data;
      },
      error => {
        console.error('Erro ao buscar CEP:', error);
      }
    );
  }
}
