import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { AnimationsService } from 'src/app/services/animations.service';

@Component({
  selector: 'app-section-work',
  templateUrl: './section-work.component.html',
  styleUrls: ['./section-work.component.scss']
})
export class SectionWorkComponent implements AfterViewInit {

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
