import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppActionUninstallComponent } from './app-action-uninstall.component';

describe('AppActionUninstallComponent', () => {
  let component: AppActionUninstallComponent;
  let fixture: ComponentFixture<AppActionUninstallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppActionUninstallComponent]
    });
    fixture = TestBed.createComponent(AppActionUninstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
