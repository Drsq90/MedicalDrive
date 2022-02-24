import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkNavComponent } from './mark-nav.component';

describe('MarkNavComponent', () => {
  let component: MarkNavComponent;
  let fixture: ComponentFixture<MarkNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
