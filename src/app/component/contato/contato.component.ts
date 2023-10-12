import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {
  selectedSubject: string = '';
  name: string = '';
  email: string = '';
  message: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const subject = params.get('subject');
      if (subject) {
        this.selectedSubject = subject;
      }
    });
  }

  onSubjectChange(): void {
    // Limpando os campos quando o assunto é alterado
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
