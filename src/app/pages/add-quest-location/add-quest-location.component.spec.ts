import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuestLocationComponent } from './add-quest-location.component';

describe('AdminEditComponent', () => {
  let component: AddQuestLocationComponent;
  let fixture: ComponentFixture<AddQuestLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddQuestLocationComponent]
    });
    fixture = TestBed.createComponent(AddQuestLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
