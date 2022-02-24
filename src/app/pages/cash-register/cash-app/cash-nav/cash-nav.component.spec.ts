import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashNavComponent } from './cash-nav.component';

describe('CashNavComponent', () => {
  let component: CashNavComponent;
  let fixture: ComponentFixture<CashNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
