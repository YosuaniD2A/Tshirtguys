import { Component, ElementRef, Inject, OnInit, Renderer2  } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { WINDOW } from 'src/app/Providers/window-provider';
import { AnimationsService } from './services/animations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Tshirtguys';

  private textHeaders!: NodeListOf<Element>;

  scrollPosition: number = 0;

  constructor(
    private elementRef: ElementRef, 
    private animationService: AnimationsService,
    private primengConfig: PrimeNGConfig,
    private renderer: Renderer2, 
    @Inject(WINDOW) private window: Window) {}

  ngOnInit() {
      this.primengConfig.ripple = true;
      this.scrollToTop();
  }

  ngAfterViewInit() {
    this.renderer.listen(this.window, 'scroll', (event) => {
      const scrollPosition = this.window.scrollY;
      this.scrollPosition = scrollPosition
    });

  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
