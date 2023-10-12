import { Component } from '@angular/core';

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
