import { OnInit, Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationsService } from 'src/app/services/animations.service';

@Component({
  selector: 'app-section-ourservices',
  templateUrl: './section-ourservices.component.html',
  styleUrls: ['./section-ourservices.component.scss']
})
export class SectionOurservicesComponent implements OnInit {

  visible1 = false;
  visible2 = false;
  visible3 = false;

  constructor(
    private elementRef: ElementRef,
    private animationService: AnimationsService,
    private router: Router) { }

  ngOnInit() {
    this.animationService.observe(
      this.elementRef.nativeElement.querySelector('.text-summary'),
      () => {
        this.applyAnimationClass(1);
      }
    );

    this.animationService.observe(
      this.elementRef.nativeElement.querySelector('.text-header'),
      () => {
        this.applyAnimationClass(2);
      }
    );

    this.animationService.observe(
      this.elementRef.nativeElement.querySelector('.services'),
      () => {
        this.applyAnimationClass(3);
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
      case 3:
        this.visible3 = true;
        break;
      default:
        break;
    }
  }

  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

  navigateTo(section: string) {
    if (this.router.url.includes('home')) {
      this.scrollToSection(section);
    } else {
      this.router.navigate(['/home'], { fragment: section });
      this.scrollToSection(section);
    }
  }

}
