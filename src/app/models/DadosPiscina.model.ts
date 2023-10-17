export interface DadosPiscina {
  comprimento: number;
  largura: number;
  profundidade: number;
  area?: number;
  volume?: number;
  aberta: boolean;
  capa?: boolean;
  usComercial?: boolean;
  usoAno: number; // 1->ano todo 2->menos inverno 3->só no verão
  usoMes: number; // 1->mês todo 2->fim de semana
  vento: number; //1 - nenhum 2 - fraco 3 - moderado 4 - forte
  verao: number;
  inverno: number;
  outono: number;
  primevera: number;
  tempInicial: number;
  tempDesejada: number;
}
