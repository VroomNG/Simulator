import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppActionsMenuComponent } from './app-actions-menu.component';

describe('AppActionsMenuComponent', () => {
  let component: AppActionsMenuComponent;
  let fixture: ComponentFixture<AppActionsMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppActionsMenuComponent]
    });
    fixture = TestBed.createComponent(AppActionsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
