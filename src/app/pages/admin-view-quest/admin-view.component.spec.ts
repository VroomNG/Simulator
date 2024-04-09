import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewQuestComponent } from './admin-view-quest.component';

describe('AdminViewComponent', () => {
  let component: AdminViewQuestComponent;
  let fixture: ComponentFixture<AdminViewQuestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminViewQuestComponent]
    });
    fixture = TestBed.createComponent(AdminViewQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
