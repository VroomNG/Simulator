import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RidersEditComponent } from './riders-edit.component';

describe('RidersEditComponent', () => {
  let component: RidersEditComponent;
  let fixture: ComponentFixture<RidersEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RidersEditComponent]
    });
    fixture = TestBed.createComponent(RidersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
