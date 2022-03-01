import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatiProfileComponent } from './pati-profile.component';

describe('PatiProfileComponent', () => {
  let component: PatiProfileComponent;
  let fixture: ComponentFixture<PatiProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatiProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatiProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
