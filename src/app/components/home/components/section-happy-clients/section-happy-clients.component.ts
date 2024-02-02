import { Component, ElementRef, OnInit } from '@angular/core';
import { AnimationsService } from 'src/app/services/animations.service';


@Component({
  selector: 'app-section-happy-clients',
  templateUrl: './section-happy-clients.component.html',
  styleUrls: ['./section-happy-clients.component.scss']
})
export class SectionHappyClientsComponent implements OnInit {

  value: number = 5;
  visible1 = false;
  visible2 = false;

  responsiveOptions: any[] | undefined;

  constructor(
    private elementRef: ElementRef,
    private animationService: AnimationsService
  ) { }



  clients: any[] = [
    {
      id: "1000",
      code: "f230fh0g3",
      name: "Amr Zain",
      busniess: "Logistics Co-Ordinator",
      brief: "Excelent products",
      description: `I am very grateful to work with such an amazing company as t-ShirtsGuys, they are very professional and fast in response to our Purchase orders. Whenever I need anything or question, usually Angie Gutiérrez assists with most very fast and gets my questions answered very quickly.
      I would give 10 stars for the great service and amazing people at t-ShirtsGuys.`,
      image: "bamboo-watch.jpg",
      rating: 5
    },
    {
      id: "1001",
      code: "nvklal433",
      name: "Mallory Jonson",
      busniess: "Manager",
      brief: "Excelent products",
      description: `I have been working with tShirtGuys the whole 8+ years I have been with my company. 
      They are competitively priced and handle all import/export for us. Turnaround is fast and they are good at rushing products when necessary. They provide detailed packing lists upon shipment and give clear communication on shortages with raw goods or other issues that arise. My whole team enjoys working with Angie and George.`,
      image: "black-watch.jpg",
      rating: 4
    },
    {
      id: "1002",
      code: "zz21cz3c1",
      name: "Blue Band",
      busniess: "Marketing gerent",
      brief: "Excelent products",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur harum rerum, vitae provident maiores quas dolorem fuga molestias nostrum molestiae quod pariatur corrupti facilis. Voluptates, distinctio voluptatibus? Ducimus, accusamus placeat?",
      image: "blue-band.jpg",
      rating: 3
    },
    {
      id: "1003",
      code: "244wgerg2",
      name: "Blue T-Shirt",
      busniess: "Busniess people",
      brief: "Excelent products",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur harum rerum, vitae provident maiores quas dolorem fuga molestias nostrum molestiae quod pariatur corrupti facilis. Voluptates, distinctio voluptatibus? Ducimus, accusamus placeat?",
      image: "blue-t-shirt.jpg",
      rating: 5
    },
  ];

  carouselResponsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  ngOnInit() {

    this.animationService.observe(
      this.elementRef.nativeElement.querySelector('.text-header'),
      () => {
        this.applyAnimationClass(1);
      }
    );

    this.animationService.observe(
      this.elementRef.nativeElement.querySelector('.caroucel'),
      () => {
        this.applyAnimationClass(2);
      }
    );

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
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
