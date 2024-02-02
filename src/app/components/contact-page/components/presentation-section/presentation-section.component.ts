import { Component, ElementRef, OnInit } from '@angular/core';
import { AnimationsService } from 'src/app/services/animations.service';

@Component({
  selector: 'app-presentation-section',
  templateUrl: './presentation-section.component.html',
  styleUrls: ['./presentation-section.component.scss']
})
export class PresentationSectionComponent implements OnInit {

  visible1 = false;
  visible2 = false;

  constructor(
    private elementRef: ElementRef,
    private animationService: AnimationsService) { }

  ngOnInit() {
    this.animationService.observe(
      this.elementRef.nativeElement.querySelector('.text-header'),
      () => {
        this.applyAnimationClass(1);
      }
    );

    this.animationService.observe(
      this.elementRef.nativeElement.querySelector('.text-body'),
      () => {
        this.applyAnimationClass(2);
      }
    );

  }

  private applyAnimationClass(elementNumber: number): void {
    switch (elementNumber) {
      case 1:
        this.visible1 = true;
        break;
      case 2:
        this.visible2 = true;
        break;
      default:
        break;
    }
  }
}
