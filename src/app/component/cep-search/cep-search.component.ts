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
  // Valor padrão para componentType
  componentType: 'ondeComprar' | 'representantes' = 'ondeComprar';

  cep!: string;
  address!: Address | null;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeType = this.route.snapshot.paramMap.get('type');
    // Verificação para garantir que o valor da rota seja um dos valores esperados
    if (routeType === 'ondeComprar' || routeType === 'representantes') {
      this.componentType = routeType;
    } else {
      // Se o valor não for válido, ele usará o valor padrão e mostrará um aviso no console
      console.warn('Tipo de componente inválido fornecido na rota. Usando o padrão: ondeComprar.');
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
