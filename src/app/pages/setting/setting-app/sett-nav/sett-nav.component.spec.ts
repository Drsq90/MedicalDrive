import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettNavComponent } from './sett-nav.component';

describe('SettNavComponent', () => {
  let component: SettNavComponent;
  let fixture: ComponentFixture<SettNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
