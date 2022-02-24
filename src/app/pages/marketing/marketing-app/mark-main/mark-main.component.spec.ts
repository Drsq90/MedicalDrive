import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkMainComponent } from './mark-main.component';

describe('MarkMainComponent', () => {
  let component: MarkMainComponent;
  let fixture: ComponentFixture<MarkMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
