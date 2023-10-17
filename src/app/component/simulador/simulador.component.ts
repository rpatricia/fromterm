import { Component } from '@angular/core';
import { BombasDeCalor } from 'src/app/models/BombasDeCalor.model';
import { DadosPiscina } from 'src/app/models/DadosPiscina.model';
import { BombasDeCalorService } from 'src/app/services/bombas-de-calor.service';
import { SimuladorService } from 'src/app/services/simulador.service';

@Component({
  selector: 'app-simulador',
  templateUrl: './simulador.component.html',
  styleUrls: ['./simulador.component.scss'],
})
export class SimuladorComponent {
  dadosPiscina: DadosPiscina = {
    comprimento: 0,
    largura: 0,
    profundidade: 0,
    aberta: false,
    usoAno: 1, // 1->ano todo 2->menos inverno 3->só no verão
    usoMes: 1, // 1->mês todo 2->fim de semana
    vento: 1, //1 - nenhum 2 - fraco 3 - moderado 4 - forte
    verao: 30,
    inverno: 10,
    outono: 15,
    primevera: 20,
    tempInicial: 20,
    tempDesejada: 30,
  };

  aberta: string = '0';
  bombaDeCalor!: BombasDeCalor;

  constructor(
    private readonly bombasDeCalorService: BombasDeCalorService,
    private readonly simuladorService: SimuladorService
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  submit() {
    this.dadosPiscina.aberta = this.aberta === '1' ? true : false;
    this.dadosPiscina.vento = +this.dadosPiscina.vento;
    this.dadosPiscina.usoAno = +this.dadosPiscina.usoAno;
    this.dadosPiscina.usoMes = +this.dadosPiscina.usoMes;
    console.log(this.dadosPiscina);

    this.simuladorService
      .obterModeloBombaDeCalor(this.dadosPiscina)
      .then((data) => {
        if (data) this.bombaDeCalor = data;
      });
  }
}
