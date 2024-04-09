import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsSettingsComponent } from './trips-settings.component';

describe('TripsSettingsComponent', () => {
  let component: TripsSettingsComponent;
  let fixture: ComponentFixture<TripsSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TripsSettingsComponent]
    });
    fixture = TestBed.createComponent(TripsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
