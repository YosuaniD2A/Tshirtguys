import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimationsService } from 'src/app/services/animations.service';

@Component({
  selector: 'app-section-aboutus',
  templateUrl: './section-aboutus.component.html',
  styleUrls: ['./section-aboutus.component.scss']
})
export class SectionAboutusComponent implements OnInit, AfterViewInit {

  private textHeaders!: NodeListOf<Element>;
  responsiveOptions: any[] | undefined;

  images: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

  constructor(
    private route: ActivatedRoute,
    private elementRef: ElementRef,
    private animationService: AnimationsService
    ) { }

  ngOnInit() {

    //this.images = this.images.concat(this.images);

    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5
      },
      {
        breakpoint: '768px',
        numVisible: 3
      },
      {
        breakpoint: '560px',
        numVisible: 1
      }
    ];
  
  }

  ngAfterViewInit() {
    this.textHeaders = this.elementRef.nativeElement.querySelectorAll('.text-header');
      this.animationService.observeTextHeaders(this.textHeaders);
  }

  pauseMarquee() {
    const marquee = document.querySelector('.marquee-content') as HTMLElement;
    marquee.style.animationPlayState = 'paused';
  }

  playMarquee() {
    const marquee = document.querySelector('.marquee-content') as HTMLElement;
    marquee.style.animationPlayState = 'running';
  }

}
