import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppActionDriverVisibilityComponent } from './app-action-driver-visibility.component';

describe('AppActionDriverVisibilityComponent', () => {
  let component: AppActionDriverVisibilityComponent;
  let fixture: ComponentFixture<AppActionDriverVisibilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppActionDriverVisibilityComponent]
    });
    fixture = TestBed.createComponent(AppActionDriverVisibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
