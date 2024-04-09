import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminQuestDetailsComponent } from './admin-quest-dtls.component';

describe('AdminEditComponent', () => {
  let component: AdminQuestDetailsComponent;
  let fixture: ComponentFixture<AdminQuestDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminQuestDetailsComponent]
    });
    fixture = TestBed.createComponent(AdminQuestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
