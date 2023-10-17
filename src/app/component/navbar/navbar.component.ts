import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isMenuCollapsed = true;

  navLinks = [
    { id: 'fromtherm', label: 'Fromtherm', icon: 'bi-house' },
    { id: 'bombas-de-calor', label: 'Bombas de Calor', icon: 'bi-gear' },
    { id: 'onde-comprar', label: 'Onde Comprar', icon: 'bi-shop' },
    { id: 'representantes', label: 'Representantes', icon: 'bi-person' },
    { id: 'assistencia-tecnica', label: 'Assistência Técnica', icon: 'bi-tools' },
    { id: 'simulador', label: 'Simulador', icon: 'bi-calculator' }, 
    { id: 'contato', label: 'Contato', icon: 'bi-envelope' }
  ];

  toggleMenu(): void {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  navigateToSection(sectionId: string): void {
    // Se não for "assistencia-tecnica", apenas role para a seção correspondente
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
