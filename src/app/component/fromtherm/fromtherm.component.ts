import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-fromtherm',
  templateUrl: './fromtherm.component.html',
  styleUrls: ['./fromtherm.component.scss']
})
export class FromthermComponent {
  showTimeline: boolean = true; 
  foundationYear: number = 2020;
  currentYear: number = new Date().getFullYear();
  yearsSinceFoundation: number = this.currentYear - this.foundationYear;
  imageList: string[] = ["https://via.placeholder.com/500", "https://via.placeholder.com/500/111", "https://via.placeholder.com/500/222"];
  currentImageIndex: number = 0;

  // Linha do tempo com marcos da empresa
  timelineEvents = [
    { year: 2020, event: "Fundação da Fromtherm." },
    { year: 2021, event: "Lançamento do primeiro produto principal." },
    { year: 2022, event: "Expansão para mercados internacionais." }
    // Adicione mais marcos conforme necessário
  ];

  // Propriedades do gráfico
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    title: {
      text: 'Crescimento ao Longo dos Anos'
    },
    xAxis: {
      categories: ['2020', '2021', '2022', '2023']
    },
    series: [{
      type: 'line',
      name: 'Crescimento da Empresa',
      data: [50, 150, 300, 500]
    }]
  };

  toggleTimeline(): void {
    this.showTimeline = !this.showTimeline;
  }

  changeImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.imageList.length;
  }

  getCurrentImage(): string {
    return this.imageList[this.currentImageIndex];
  }
}
