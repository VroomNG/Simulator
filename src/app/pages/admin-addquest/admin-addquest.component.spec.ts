import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddQuestComponent } from './admin-addquest.component';

describe('AdminAddComponent', () => {
  let component: AdminAddQuestComponent;
  let fixture: ComponentFixture<AdminAddQuestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAddQuestComponent]
    });
    fixture = TestBed.createComponent(AdminAddQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
