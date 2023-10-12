import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentantesComponent } from './representantes.component';

describe('RepresentantesComponent', () => {
  let component: RepresentantesComponent;
  let fixture: ComponentFixture<RepresentantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepresentantesComponent]
    });
    fixture = TestBed.createComponent(RepresentantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
