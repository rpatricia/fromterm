import { Component } from '@angular/core';

@Component({
  selector: 'app-bombas-de-calor',
  templateUrl: './bombas-de-calor.component.html',
  styleUrls: ['./bombas-de-calor.component.scss']
})
export class BombasDeCalorComponent {
  categories = [
    { id: 1, name: 'Aquecimento de Piscina', machines: [], showMachines: false },
    { id: 2, name: 'Central de Água', machines: [], showMachines: false }
  ];

  toggleMachines(categoryId: number): void {
    this.categories.forEach(category => {
      if (category.id === categoryId) {
        category.showMachines = !category.showMachines;
      } else {
        category.showMachines = false;
      }
    });
  }
}
