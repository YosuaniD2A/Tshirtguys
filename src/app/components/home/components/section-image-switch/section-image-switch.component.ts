import { Component, OnInit  } from '@angular/core';
import { interval } from 'rxjs';
import { HostListener } from '@angular/core';

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
  slideActive = false;
  activatedOnce = false;

  ngOnInit() {
    this.checkScroll(); 

    interval(2000).subscribe(() => {
      this.changeImage();
    });
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    
    // Ajusta la altura según tu necesidad
    const scrollTriggerHeight = 2180;

    if (!this.activatedOnce && scrollPosition > scrollTriggerHeight) {
      this.slideActive = true;
      this.activatedOnce = true;
    }
  }

  changeImage() {
    this.fadeInOut = true;

    // Espera 1 segundo antes de cambiar la imagen y reiniciar la animación
    setTimeout(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      this.fadeInOut = false;
    }, 1000);
  }

}
