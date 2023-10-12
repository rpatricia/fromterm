import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Importação necessária

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
    { id: 'contato', label: 'Contato', icon: 'bi-envelope' }
  ];

  constructor(private router: Router) { }  // Injeção do Router

  toggleMenu(): void {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  navigateToSection(sectionId: string): void {
    if (sectionId === 'assistencia-tecnica') {
      this.router.navigate(['/contato', 'assistencia-tecnica']);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
