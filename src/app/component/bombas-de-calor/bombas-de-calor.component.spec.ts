import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BombasDeCalorComponent } from './bombas-de-calor.component';

describe('BombasDeCalorComponent', () => {
  let component: BombasDeCalorComponent;
  let fixture: ComponentFixture<BombasDeCalorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BombasDeCalorComponent]
    });
    fixture = TestBed.createComponent(BombasDeCalorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
