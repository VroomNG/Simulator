import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgeEditComponent } from './surge-edit.component';

describe('SurgeEditComponent', () => {
  let component: SurgeEditComponent;
  let fixture: ComponentFixture<SurgeEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurgeEditComponent]
    });
    fixture = TestBed.createComponent(SurgeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
