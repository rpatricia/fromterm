import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromthermComponent } from './fromtherm.component';

describe('FromthermComponent', () => {
  let component: FromthermComponent;
  let fixture: ComponentFixture<FromthermComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FromthermComponent]
    });
    fixture = TestBed.createComponent(FromthermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
