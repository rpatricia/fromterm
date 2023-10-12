import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SejaUmaRevendaComponent } from './seja-uma-revenda.component';

describe('SejaUmaRevendaComponent', () => {
  let component: SejaUmaRevendaComponent;
  let fixture: ComponentFixture<SejaUmaRevendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SejaUmaRevendaComponent]
    });
    fixture = TestBed.createComponent(SejaUmaRevendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
