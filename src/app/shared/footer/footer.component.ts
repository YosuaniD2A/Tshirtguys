import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  value: string = '';

  constructor(private router: Router){}

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
