import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorerMenuComponent } from './explorer-menu.component';

describe('ExplorerMenuComponent', () => {
  let component: ExplorerMenuComponent;
  let fixture: ComponentFixture<ExplorerMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExplorerMenuComponent]
    });
    fixture = TestBed.createComponent(ExplorerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
