import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppActionDriverSettingsComponent } from './app-action-driver-settings.component';

describe('AppActionDriverSettingsComponent', () => {
  let component: AppActionDriverSettingsComponent;
  let fixture: ComponentFixture<AppActionDriverSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppActionDriverSettingsComponent]
    });
    fixture = TestBed.createComponent(AppActionDriverSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
