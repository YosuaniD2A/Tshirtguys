import { AfterViewInit, Component, ElementRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { AnimationsService } from 'src/app/services/animations.service';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-section-calc-price',
  templateUrl: './section-calc-price.component.html',
  styleUrls: ['./section-calc-price.component.scss']
})
export class SectionCalcPriceComponent implements OnInit, AfterViewInit, OnChanges {

  quantityPieces: number = 0;

  selectedQuantityInks: string = 'opcion0';
  selectedOptionServices: string = 'opcion0';

  otherLocation: boolean = false;
  neckLabelLocation: boolean = false;
  sleeveLocation: boolean = false;
  backLocation: boolean = false;

  purchasePrice: number = 0;
  aditionalvalues: number = 0;
  servicesValue: number = 0;
  total: number = 0;

  cities: City[] | undefined;

  selectedCity: City | undefined;

  private textHeaders!: NodeListOf<Element>;

  constructor(
    private elementRef: ElementRef,
    private animationService: AnimationsService
  ) { }

  ngAfterViewInit() {
    // this.textHeaders = this.elementRef.nativeElement.querySelectorAll('.text-header');
    // this.animationService.observeTextHeaders(this.textHeaders);
  }

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }

  ngOnChanges(): void {
    switch (this.selectedQuantityInks) {
      case 'opcion1':
        if(this.quantityPieces > 1199 && this.quantityPieces < 2401){
          this.purchasePrice = this.quantityPieces * 0.42;
          console.log(this.purchasePrice);
          
        }
        
        break;
      case 'opcion2':
        // Acciones para la opción 2
        console.log('Opción 2 seleccionada');
        break;
      case 'opcion3':
        // Acciones para la opción 3
        console.log('Opción 3 seleccionada');
        break;
      default:
        // Acciones por defecto (si es necesario)
        break;
    }
  }

  onChangeService() {
    console.log(this.selectedOptionServices);
  }

  onChangeInk() {
    console.log(this.selectedQuantityInks);
  }

  calculate(){
    
  }
}
