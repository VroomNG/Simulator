import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountCodeUseComponent } from './discount-code-use.component';

describe('DiscountCodeUseComponent', () => {
  let component: DiscountCodeUseComponent;
  let fixture: ComponentFixture<DiscountCodeUseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiscountCodeUseComponent]
    });
    fixture = TestBed.createComponent(DiscountCodeUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
