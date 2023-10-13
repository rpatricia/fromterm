import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Address } from '../../models/address.interface';

@Component({
  selector: 'app-cep-search',
  templateUrl: './cep-search.component.html',
  styleUrls: ['./cep-search.component.scss']
})
export class CepSearchComponent implements OnInit {
  componentType!: 'ondeComprar' | 'representantes';

  cep!: string;
  address!: Address | null;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.componentType = this.route.snapshot.paramMap.get('type') as 'ondeComprar' | 'representantes';
    if (!this.componentType) {
      throw new Error('O atributo "componentType" deve ser definido.');
    }
  }

  searchByCep(): void {
    if (this.cep && this.cep.length === 8) {
      this.http.get<Address>(`https://viacep.com.br/ws/${this.cep}/json/`).subscribe(
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
