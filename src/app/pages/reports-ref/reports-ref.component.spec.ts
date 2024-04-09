import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsRefComponent } from './reports-ref.component';

describe('ReportsRefComponent', () => {
  let component: ReportsRefComponent;
  let fixture: ComponentFixture<ReportsRefComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportsRefComponent]
    });
    fixture = TestBed.createComponent(ReportsRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
