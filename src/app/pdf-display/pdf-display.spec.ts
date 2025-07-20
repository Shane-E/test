import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfDisplay } from './pdf-display';

describe('PdfDisplay', () => {
  let component: PdfDisplay;
  let fixture: ComponentFixture<PdfDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdfDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfDisplay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
