import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyAddComponent } from './notify-add.component';

describe('NotifyAddComponent', () => {
  let component: NotifyAddComponent;
  let fixture: ComponentFixture<NotifyAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotifyAddComponent]
    });
    fixture = TestBed.createComponent(NotifyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
