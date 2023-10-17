import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-fromtherm',
  templateUrl: './fromtherm.component.html',
  styleUrls: ['./fromtherm.component.scss']
})
export class FromthermComponent implements AfterViewInit {
    @ViewChild('videoPlayer') videoPlayer!: ElementRef;

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
    
    videoList: string[] = [
        "assets/videos/1.mp4",
        "assets/videos/2 - CICLO AQUECIMENTO PISCINA 2022.mp4",
        "assets/videos/3 - CICLO AQUECIMENTO BANHO 2022.mp4",
        "assets/videos/5 - PAINEIS DESLOCADOS 2022.mp4",
        "assets/videos/8 - DEGELO GÁS QUENTE 2022.mp4",
        "assets/videos/9 - INSTALAÇÃO ELÉTRICA HIDRÁULICA 2022.mp4",
        "assets/videos/12 - PRINCIPIO FUNCIONAMENTO 2D.mp4",
        "assets/videos/17 - PRINCIPIO FUNCIONAMENTO 3D.mp4"
    ];
    currentVideoIndex: number = 0;

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

    changeVideo(): void {
        this.currentVideoIndex = (this.currentVideoIndex + 1) % this.videoList.length;
    }

    getCurrentVideo(): string {
        return this.videoList[this.currentVideoIndex];
    }

    previousVideo(): void {
        if (this.currentVideoIndex === 0) {
            this.currentVideoIndex = this.videoList.length - 1;
        } else {
            this.currentVideoIndex--;
        }
    }

    nextVideo(): void {
        this.currentVideoIndex = (this.currentVideoIndex + 1) % this.videoList.length;
    }

    muteVideo(): void {
        this.videoPlayer.nativeElement.muted = true;
    }

    ngAfterViewInit(): void {
        this.muteVideo();
    }
}
