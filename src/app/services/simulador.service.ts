import { Injectable } from '@angular/core';
import { BombasDeCalor } from '../models/BombasDeCalor.model';
import { DadosPiscina } from '../models/DadosPiscina.model';
import { BombasDeCalorService } from './bombas-de-calor.service';

@Injectable({
  providedIn: 'root',
})
export class SimuladorService {
  constructor(private bombasDeCalorService: BombasDeCalorService) {}

  dadosPiscina!: DadosPiscina;

  calcular(): number {
    if (this.dadosPiscina.aberta)
      return (
        ((this.dadosPiscina.tempDesejada +
          4 -
          this.obterValorCalculoTemp() +
          20 +
          this.obterValorCalculoVento()) *
          (4 * this.calcularArea() + this.calcularVolume() * 2)) /
        2
      );
    return (
      ((this.dadosPiscina.tempDesejada - this.obterValorCalculoTemp() + 20) *
        (3 * this.calcularArea() + 2 * this.calcularVolume())) /
      5
    );
  }

  calcularArea(): number {
    return this.dadosPiscina.comprimento * this.dadosPiscina.largura;
  }

  calcularVolume(): number {
    return (
      this.dadosPiscina.comprimento *
      this.dadosPiscina.largura *
      this.dadosPiscina.profundidade
    );
  }

  obterValorCalculoVento(): number {
    if (this.dadosPiscina.aberta) return this.dadosPiscina.vento;
    return 1;
  }

  obterValorCalculoTemp(): number {
    if (this.dadosPiscina.usoAno === 1) return this.dadosPiscina.inverno;
    else if (this.dadosPiscina.usoAno === 2)
      return (this.dadosPiscina.primevera + this.dadosPiscina.outono) / 2;
    return this.dadosPiscina.verao;
  }

  async obterModeloBombaDeCalor(
    dadosPiscina: DadosPiscina
  ): Promise<BombasDeCalor | null> {
    this.dadosPiscina = dadosPiscina;
    const valor = this.calcular();
    let bombaDeCalorSelecionada: BombasDeCalor | null = null; // Inicialize com null
    console.log(valor);

    try {
      const data = await this.bombasDeCalorService.getAll(); // Espere pela resposta
      for (const elemento of data) {
        if (this.dadosPiscina.aberta === elemento.aberta) {
          if (valor < elemento.value) {
            if (
              bombaDeCalorSelecionada === null ||
              elemento.value < bombaDeCalorSelecionada.value
            ) {
              bombaDeCalorSelecionada = elemento;
            }
          }
        }
      }
    } catch (error) {
      console.error('Erro ao obter dados da bomba de calor:', error);
    }

    return bombaDeCalorSelecionada;
  }
}
