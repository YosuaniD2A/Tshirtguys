import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationsService } from 'src/app/services/animations.service';

@Component({
  selector: 'app-section-ourservices',
  templateUrl: './section-ourservices.component.html',
  styleUrls: ['./section-ourservices.component.scss']
})
export class SectionOurservicesComponent implements AfterViewInit {

  private textHeaders!: NodeListOf<Element>;

  constructor(
    private elementRef: ElementRef,
    private animationService: AnimationsService,
    private router: Router) { }

  ngAfterViewInit() {
    this.textHeaders = this.elementRef.nativeElement.querySelectorAll('.text-header');
    this.animationService.observeTextHeaders(this.textHeaders);
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
