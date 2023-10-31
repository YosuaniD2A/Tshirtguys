import { AfterViewInit, Component, ElementRef} from '@angular/core';
import { AnimationsService } from 'src/app/services/animations.service';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements AfterViewInit {

  private textHeaders!: NodeListOf<Element>;
  accordionItems = [
    {
      title: 'Do you offer blank apparel?',
      content: `Yes. Here at T-shirt Guys we know it all starts with the right garment for your project!
    We help you find the perfect shirt for your needs.
    Please visit our local supplier's website to view their catalogs
    Mission Imprintables
    Alphabroder
    Standard upcharges will be applied to sizes XXL and larger. Normally $2.00 for XXL, $3.00 for XXXL, etc.`,
      isOpen: false
    },
    {
      title: 'Contract customer',
      content: `If you’re sending your own supplied garments to decorate, we will need the following to process your order:
      1. Detailed packing list (no generalized quantity) – Color, Sizes, COO, Quantities.
      Once the order has been approved, finalized and deposit taken, we will need the goods at our broker at least 12 days before due date.
      2. Please be aware of the 2% Misprint factor on Embroidery and Screen printing. Although we try to be perfect, things happen, but we aim keep to the industry standard of a 2% misprint factor. Keep this in mind when placing orders of your garments.
      To remain competitive with our prices, we cannot be held responsible for any damage brought to your supplied.
      Garments caused by our decoration process. We will inform you, to the best of our knowledge, if your product can or cannot be decorated. However, if your product is damaged in the process, we cannot replace or reimburse a damaged product. We will, however, replace the printing on another garment you bring in. The customer agrees to these terms when placing an order with tShirtGuys.
      We cannot combine adult, youth, infant, and all as one order. Cannot combine different shirt blends, as different materials require different print methods. Please inform us if you have this type of breakdown. The customer agrees to these terms when placing an order with tShirtGuys.`,
      isOpen: false
    },
    {
      title: 'Do you have in house art team?',
      content: `We have an experienced art team that works with you from receiving artwork files to placement instructions, sizing, colorways, printing techniques/embellishments that are intended to be used, and sending you a sample photo of the garment before production.`,
      isOpen: false
    },
    {
      title: 'What are you lead times?',
      content: `Turnaround time is generally 12 days after the final proof is approved and deposit is received. It also depends on the current production schedule at the time of approval. Rush projects are available at a fee.`,
      isOpen: false
    },
    {
      title: 'How do I set up a new account?',
      content: `To open a new account please email us at info@tshirtguys.com`,
      isOpen: false
    },
  ];

  constructor(
    private elementRef: ElementRef,
    private animationService: AnimationsService
  ) { }

  ngAfterViewInit() {
    this.textHeaders = this.elementRef.nativeElement.querySelectorAll('.text-header');
    this.animationService.observeTextHeaders(this.textHeaders);
  }

  toggleAccordion(index: number) {
    this.accordionItems[index].isOpen = !this.accordionItems[index].isOpen;

    // Close other items when opening one
    if (this.accordionItems[index].isOpen) {
      this.accordionItems.forEach((item, i) => {
        if (i !== index) {
          item.isOpen = false;
        }
      });
    }
  }

}
