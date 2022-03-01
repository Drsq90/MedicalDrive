import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatiAllComponent } from './pati-all.component';

describe('PatiAllComponent', () => {
  let component: PatiAllComponent;
  let fixture: ComponentFixture<PatiAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatiAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatiAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
