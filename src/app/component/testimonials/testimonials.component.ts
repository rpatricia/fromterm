import { Component } from '@angular/core';

interface Testimonial {
    name: string;
    message: string;
    position: string; // exemplo: 'CEO da Empresa X'
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {

    testimonials: Testimonial[] = [
        {
            name: 'João da Silva',
            message: 'A empresa Fromtherm revolucionou a forma como fazemos negócios. Estou muito satisfeito!',
            position: 'CEO da Empresa X'
        },
        {
            name: 'Maria Souza',
            message: 'Os produtos da Fromtherm são de altíssima qualidade. Recomendo fortemente!',
            position: 'Gerente na Empresa Y'
        },
        {
            name: 'Lucas Pereira',
            message: 'O atendimento da Fromtherm é excepcional. Eles realmente se importam com os clientes.',
            position: 'Diretor na Empresa Z'
        },
        {
            name: 'Fernanda Costa',
            message: 'Estou muito feliz com a minha compra. Obrigada, Fromtherm!',
            position: 'Cliente'
        }
    ];
}
