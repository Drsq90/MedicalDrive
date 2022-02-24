import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatiMainComponent } from './pati-main.component';

describe('PatiMainComponent', () => {
  let component: PatiMainComponent;
  let fixture: ComponentFixture<PatiMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatiMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatiMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
