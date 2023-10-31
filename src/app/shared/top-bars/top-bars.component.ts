import { Component, OnInit,  Renderer2, Inject  } from '@angular/core';
import { Router } from '@angular/router';
import { WINDOW } from 'src/app/Providers/window-provider';

@Component({
  selector: 'app-top-bars',
  templateUrl: './top-bars.component.html',
  styleUrls: ['./top-bars.component.scss']
})
export class TopBarsComponent implements OnInit {

  scrollPosition: number = 0;

  closeModel: boolean = false;

  showAboutUsDropdown = false;

  showMenu = false;

  constructor(
    private router: Router, 
    private renderer: Renderer2, 
    @Inject(WINDOW) private window: Window) { }

    ngOnInit() {
      this.showMenu = false;
      this.updateMenuClass();
    }
  
  ngAfterViewInit() {
    this.renderer.listen(this.window, 'scroll', (event) => {
      const scrollPosition = this.window.scrollY;
      this.scrollPosition = scrollPosition
      //console.log('Posición del scroll:', scrollPosition);
    });

    this.window.addEventListener('resize', () => {
      this.updateMenuClass();
    });
  }

  updateMenuClass() {
    const menuElement = this.window.document.querySelector('#mainmenu');
    if (this.window.innerWidth > 1150) {
      this.renderer.removeClass(menuElement, 'responsive-menu');
      this.renderer.addClass(menuElement, 'menu');
    } else {
      this.renderer.removeClass(menuElement, 'menu');
      this.renderer.addClass(menuElement, 'responsive-menu');
    }
  }

  toggleModel(){
    this.closeModel = !this.closeModel;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
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

  showDropdown(dropdown: string) {
    if (dropdown === 'aboutUsDropdown') {
      this.showAboutUsDropdown = true;
    }
  }

  // hideDropdown(dropdown: string) {
  //   if (dropdown === 'aboutUsDropdown') {
  //     this.showAboutUsDropdown = false;
  //   }
  // }

}
