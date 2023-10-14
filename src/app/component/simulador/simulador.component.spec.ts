import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimuladorComponent } from './simulador.component';

describe('SimuladorComponent', () => {
  let component: SimuladorComponent;
  let fixture: ComponentFixture<SimuladorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimuladorComponent]
    });
    fixture = TestBed.createComponent(SimuladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
