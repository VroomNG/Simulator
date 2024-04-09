import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersEditComponent } from './partners-edit.component';

describe('PartnersEditComponent', () => {
  let component: PartnersEditComponent;
  let fixture: ComponentFixture<PartnersEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartnersEditComponent]
    });
    fixture = TestBed.createComponent(PartnersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
