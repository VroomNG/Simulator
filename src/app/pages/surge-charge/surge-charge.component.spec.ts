import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgeChargeComponent } from './surge-charge.component';

describe('SurgeChargeComponent', () => {
  let component: SurgeChargeComponent;
  let fixture: ComponentFixture<SurgeChargeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurgeChargeComponent]
    });
    fixture = TestBed.createComponent(SurgeChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
