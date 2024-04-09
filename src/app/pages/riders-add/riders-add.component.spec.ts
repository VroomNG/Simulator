import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RidersAddComponent } from './riders-add.component';

describe('RidersAddComponent', () => {
  let component: RidersAddComponent;
  let fixture: ComponentFixture<RidersAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RidersAddComponent]
    });
    fixture = TestBed.createComponent(RidersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
