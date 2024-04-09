import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingsDriverComponent } from './ratings-driver.component';

describe('RatingsDriverComponent', () => {
  let component: RatingsDriverComponent;
  let fixture: ComponentFixture<RatingsDriverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RatingsDriverComponent]
    });
    fixture = TestBed.createComponent(RatingsDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
