import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettlementsPartnerWithdrawRequestsComponent } from './settlements-partner-withdraw-requests.component';

describe('SettlementsPartnerWithdrawRequestsComponent', () => {
  let component: SettlementsPartnerWithdrawRequestsComponent;
  let fixture: ComponentFixture<SettlementsPartnerWithdrawRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettlementsPartnerWithdrawRequestsComponent]
    });
    fixture = TestBed.createComponent(SettlementsPartnerWithdrawRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
