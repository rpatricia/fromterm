import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assistencia-tecnica',
  templateUrl: './assistencia-tecnica.component.html',
  styleUrls: ['./assistencia-tecnica.component.scss']
})
export class AssistenciaTecnicaComponent implements OnInit {
  selectedSubject: string = '';

  ngOnInit(): void {
    this.selectedSubject = 'assistencia-tecnica';  // Definindo o assunto ao inicializar
  }

  onSubjectChange(): void {
    // Se necessário, logicamente aqui para lidar com mudanças no assunto.
  }
}
