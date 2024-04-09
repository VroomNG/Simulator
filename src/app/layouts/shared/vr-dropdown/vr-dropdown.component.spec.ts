import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VrDropdownComponent } from './vr-dropdown.component';

describe('VrDropdownComponent', () => {
  let component: VrDropdownComponent;
  let fixture: ComponentFixture<VrDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VrDropdownComponent]
    });
    fixture = TestBed.createComponent(VrDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
