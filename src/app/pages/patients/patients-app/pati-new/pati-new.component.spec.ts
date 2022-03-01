import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatiNewComponent } from './pati-new.component';

describe('PatiNewComponent', () => {
  let component: PatiNewComponent;
  let fixture: ComponentFixture<PatiNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatiNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatiNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
