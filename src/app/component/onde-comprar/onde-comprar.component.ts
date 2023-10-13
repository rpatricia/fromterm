import { Component, Input } from '@angular/core';
import { Address } from '../../models/address.interface';

@Component({
  selector: 'app-onde-comprar',
  templateUrl: './onde-comprar.component.html',
  styleUrls: ['./onde-comprar.component.scss']
})
export class OndeComprarComponent {
  @Input() address!: Address | null;
}
