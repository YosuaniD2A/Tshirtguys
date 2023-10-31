import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { AnimationsService } from 'src/app/services/animations.service';

@Component({
  selector: 'app-section-pricing',
  templateUrl: './section-pricing.component.html',
  styleUrls: ['./section-pricing.component.scss']
})
export class SectionPricingComponent implements AfterViewInit {

  private textHeaders!: NodeListOf<Element>;

  constructor(
    private elementRef: ElementRef,
    private animationService: AnimationsService
  ) { }

  ngAfterViewInit() {
    this.textHeaders = this.elementRef.nativeElement.querySelectorAll('.text-header');
    this.animationService.observeTextHeaders(this.textHeaders);
  }

}
