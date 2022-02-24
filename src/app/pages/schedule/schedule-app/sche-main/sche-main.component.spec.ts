import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheMainComponent } from './sche-main.component';

describe('ScheMainComponent', () => {
  let component: ScheMainComponent;
  let fixture: ComponentFixture<ScheMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
