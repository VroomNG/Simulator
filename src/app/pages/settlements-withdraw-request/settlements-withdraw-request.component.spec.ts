import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettlementsWithdrawRequestComponent } from './settlements-withdraw-request.component';

describe('SettlementsWithdrawRequestComponent', () => {
  let component: SettlementsWithdrawRequestComponent;
  let fixture: ComponentFixture<SettlementsWithdrawRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettlementsWithdrawRequestComponent]
    });
    fixture = TestBed.createComponent(SettlementsWithdrawRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
