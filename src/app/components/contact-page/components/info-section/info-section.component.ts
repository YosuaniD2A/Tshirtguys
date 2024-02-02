import { Component, ElementRef } from '@angular/core';
import { AnimationsService } from 'src/app/services/animations.service';

@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.scss']
})
export class InfoSectionComponent {
  visible1 = false;
  visible2 = false;

  constructor(
    private elementRef: ElementRef,
    private animationService: AnimationsService) { }

  ngOnInit() {
    this.animationService.observe(
      this.elementRef.nativeElement.querySelector('.info-left'),
      () => {
        this.applyAnimationClass(1);
      }
    );

    this.animationService.observe(
      this.elementRef.nativeElement.querySelector('.info-right'),
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
