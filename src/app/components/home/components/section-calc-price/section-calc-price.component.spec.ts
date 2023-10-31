import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCalcPriceComponent } from './section-calc-price.component';

describe('SectionCalcPriceComponent', () => {
  let component: SectionCalcPriceComponent;
  let fixture: ComponentFixture<SectionCalcPriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionCalcPriceComponent]
    });
    fixture = TestBed.createComponent(SectionCalcPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
