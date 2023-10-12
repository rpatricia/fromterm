import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OndeComprarComponent } from './onde-comprar.component';

describe('OndeComprarComponent', () => {
  let component: OndeComprarComponent;
  let fixture: ComponentFixture<OndeComprarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OndeComprarComponent]
    });
    fixture = TestBed.createComponent(OndeComprarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
