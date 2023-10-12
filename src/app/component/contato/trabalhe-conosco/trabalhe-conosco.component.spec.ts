import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabalheConoscoComponent } from './trabalhe-conosco.component';

describe('TrabalheConoscoComponent', () => {
  let component: TrabalheConoscoComponent;
  let fixture: ComponentFixture<TrabalheConoscoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrabalheConoscoComponent]
    });
    fixture = TestBed.createComponent(TrabalheConoscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
