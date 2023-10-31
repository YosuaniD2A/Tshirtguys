import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { AnimationsService } from 'src/app/services/animations.service';

interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
}

@Component({
  selector: 'app-section-workflow',
  templateUrl: './section-workflow.component.html',
  styleUrls: ['./section-workflow.component.scss']
})
export class SectionWorkflowComponent implements AfterViewInit {

  private textHeaders!: NodeListOf<Element>;

  events: EventItem[];

  constructor(
    private elementRef: ElementRef,
    private animationService: AnimationsService
  ) {
    this.events = [
      { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
      { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
      { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
      { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];
  }

  ngAfterViewInit() {
    this.textHeaders = this.elementRef.nativeElement.querySelectorAll('.text-header');
    this.animationService.observeTextHeaders(this.textHeaders);
  }
}
