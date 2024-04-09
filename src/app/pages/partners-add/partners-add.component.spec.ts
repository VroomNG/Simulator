import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersAddComponent } from './partners-add.component';

describe('PartnersAddComponent', () => {
  let component: PartnersAddComponent;
  let fixture: ComponentFixture<PartnersAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartnersAddComponent]
    });
    fixture = TestBed.createComponent(PartnersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
