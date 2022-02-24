import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatiNavComponent } from './pati-nav.component';

describe('PatiNavComponent', () => {
  let component: PatiNavComponent;
  let fixture: ComponentFixture<PatiNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatiNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatiNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
