import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewAccessComponent } from './admin-view-access.component';

describe('AdminViewAccessComponent', () => {
  let component: AdminViewAccessComponent;
  let fixture: ComponentFixture<AdminViewAccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminViewAccessComponent]
    });
    fixture = TestBed.createComponent(AdminViewAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
