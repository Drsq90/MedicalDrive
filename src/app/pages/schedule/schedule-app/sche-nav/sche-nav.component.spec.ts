import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheNavComponent } from './sche-nav.component';

describe('ScheNavComponent', () => {
  let component: ScheNavComponent;
  let fixture: ComponentFixture<ScheNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
