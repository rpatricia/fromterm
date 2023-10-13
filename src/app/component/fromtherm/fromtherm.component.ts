import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-fromtherm',
  templateUrl: './fromtherm.component.html',
  styleUrls: ['./fromtherm.component.scss']
})
export class FromthermComponent {
  showTimeline: string = 'expanded';
  showFullText: boolean = false;
  showOwners: string = 'expanded';
  showImageSection: string = 'expanded';
  showTextSection: string = 'expanded';
  showMapSection: string = 'expanded';
  showChartSection: string = 'expanded';
  foundationYear: number = 2020;
  currentYear: number = new Date().getFullYear();
  yearsSinceFoundation: number = this.currentYear - this.foundationYear;
  imageList: string[] = ["https://picsum.photos/900/400", "https://picsum.photos/901/400", "https://picsum.photos/902/400"];
  currentImageIndex: number = 0;
  lastClickedButton: string = '';  

  timelineEvents = [
    { year: 2020, event: "Fundação da Fromtherm." },
    { year: 2021, event: "Lançamento do primeiro produto principal." },
    { year: 2022, event: "Expansão para mercados internacionais." }
  ];

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
  toggleSection(section: string): void {
    switch (section) {
      case 'image':
        this.showImageSection = this.showImageSection === 'expanded' ? 'minimized' : 'expanded';
        break;
      case 'text':
        this.showTextSection = this.showTextSection === 'expanded' ? 'minimized' : 'expanded';
        break;
      case 'timeline':
        this.showTimeline = this.showTimeline === 'expanded' ? 'minimized' : 'expanded';
        break;
      case 'owners':
        this.showOwners = this.showOwners === 'expanded' ? 'minimized' : 'expanded';
        break;
      case 'map':
        this.showMapSection = this.showMapSection === 'expanded' ? 'minimized' : 'expanded';
        break;
      case 'chart':
        this.showChartSection = this.showChartSection === 'expanded' ? 'minimized' : 'expanded';
        break;
      default:
        break;
    }
}


  changeImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.imageList.length;
  }

  getCurrentImage(): string {
    return this.imageList[this.currentImageIndex];
  }
}
