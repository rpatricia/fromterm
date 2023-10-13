import { Component, Input } from '@angular/core';
import { Address } from '../../models/address.interface';

@Component({
  selector: 'app-representantes',
  templateUrl: './representantes.component.html',
  styleUrls: ['./representantes.component.scss']
})
export class RepresentantesComponent {
  @Input() address!: Address | null;
}
