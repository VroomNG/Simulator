import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettlementsWithdrawDetailsComponent } from './settlements-withdraw-details.component';

describe('SettlementsWithdrawDetailsComponent', () => {
  let component: SettlementsWithdrawDetailsComponent;
  let fixture: ComponentFixture<SettlementsWithdrawDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettlementsWithdrawDetailsComponent]
    });
    fixture = TestBed.createComponent(SettlementsWithdrawDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
