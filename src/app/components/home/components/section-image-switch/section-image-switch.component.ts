import { Component, ElementRef, OnInit  } from '@angular/core';
import { interval } from 'rxjs';
import { HostListener } from '@angular/core';
import { AnimationsService } from 'src/app/services/animations.service';

@Component({
  selector: 'app-section-image-switch',
  templateUrl: './section-image-switch.component.html',
  styleUrls: ['./section-image-switch.component.scss']
})
export class SectionImageSwitchComponent implements OnInit {

  images: string[] = [
    'assets/image/change1.png', 
    'assets/image/change2.png', 
    'assets/image/change3.png', 
    'assets/image/change4.png', 
    'assets/image/change5.png'
  ];
  currentImageIndex = 0;
  fadeInOut = false;
  // slideActive = false;
  // activatedOnce = false;

  visible1 = false;
  visible2 = false;

  constructor(
    private elementRef: ElementRef,
    private animationService: AnimationsService) { }

  ngOnInit() {
    this.animationService.observe(
      this.elementRef.nativeElement.querySelector('.change-images'),
      () => {
        this.applyAnimationClass(1);
      }
    );

    this.animationService.observe(
      this.elementRef.nativeElement.querySelector('.section-text'),
      () => {
        this.applyAnimationClass(2);
      }
    );
    // this.checkScroll(); 

    interval(1500).subscribe(() => {
      this.changeImage();
    });
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

  // @HostListener('window:scroll', ['$event'])
  // checkScroll() {
  //   const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    
  //   // Ajusta la altura según tu necesidad
  //   const scrollTriggerHeight = 2180;

  //   if (!this.activatedOnce && scrollPosition > scrollTriggerHeight) {
  //     this.slideActive = true;
  //     this.activatedOnce = true;
  //   }
  // }

  changeImage() {
    this.fadeInOut = true;

    // Espera 1 segundo antes de cambiar la imagen y reiniciar la animación
    setTimeout(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      this.fadeInOut = false;
    }, 1000);
  }

}
