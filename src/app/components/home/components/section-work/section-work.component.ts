import { Component, ElementRef, OnInit } from '@angular/core';
import { AnimationsService } from 'src/app/services/animations.service';

@Component({
  selector: 'app-section-work',
  templateUrl: './section-work.component.html',
  styleUrls: ['./section-work.component.scss']
})
export class SectionWorkComponent implements OnInit {

  visible1 = false;
  visible2 = false;

  constructor(
    private elementRef: ElementRef,
    private animationService: AnimationsService
  ) { }

  ngOnInit() {
    this.animationService.observe(
      this.elementRef.nativeElement.querySelector('.text-header'),
      () => {
        this.applyAnimationClass(1);
      }
    );

    this.animationService.observe(
      this.elementRef.nativeElement.querySelector('.content-items'),
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
