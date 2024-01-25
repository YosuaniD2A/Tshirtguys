import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionHomeComponent } from './components/home/components/section-home/section-home.component';
import { SectionAboutusComponent } from './components/home/components/section-aboutus/section-aboutus.component';
import { SectionOurservicesComponent } from './components/home/components/section-ourservices/section-ourservices.component';
import { RippleModule } from 'primeng/ripple';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { FormsModule } from '@angular/forms';
import { WINDOW } from './Providers/window-provider';
import { SectionWorkflowComponent } from './components/home/components/section-workflow/section-workflow.component';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { SectionWorkComponent } from './components/home/components/section-work/section-work.component';
import { SplitterModule } from 'primeng/splitter';
import { AnimateModule } from 'primeng/animate';
import { SectionImageSwitchComponent } from './components/home/components/section-image-switch/section-image-switch.component';
import { HomeComponent } from './components/home/home.component';
import { TopBarsComponent } from './shared/top-bars/top-bars.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SectionHappyClientsComponent } from './components/home/components/section-happy-clients/section-happy-clients.component';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { SplitWordsPipe } from './pipes/split-words.pipe';
import { SectionQualityCertifiedComponent } from './components/home/components/section-quality-certified/section-quality-certified.component';
import { InputTextModule } from 'primeng/inputtext';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { PresentationSectionComponent } from './components/contact-page/components/presentation-section/presentation-section.component';
import { InfoSectionComponent } from './components/contact-page/components/info-section/info-section.component';
import { MapSectionComponent } from './components/contact-page/components/map-section/map-section.component';
import { DialogModule } from 'primeng/dialog';
import { MenuModule } from 'primeng/menu';
import { FaqComponent } from './components/home/components/section-faq/faq.component';
import { AccordionModule } from 'primeng/accordion';
import { CheckboxModule } from 'primeng/checkbox';
import { SectionPricingComponent } from './components/home/components/section-pricing/section-pricing.component';
import { DividerModule } from 'primeng/divider';
import { SectionCalcPriceComponent } from './components/home/components/section-calc-price/section-calc-price.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { SliderModule } from 'primeng/slider';
import { DragDropModule } from 'primeng/dragdrop';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    SectionHomeComponent,
    SectionAboutusComponent,
    SectionOurservicesComponent,
    SectionWorkflowComponent,
    SectionWorkComponent,
    SectionImageSwitchComponent,
    HomeComponent,
    TopBarsComponent,
    FooterComponent,
    SectionHappyClientsComponent,
    SplitWordsPipe,
    SectionQualityCertifiedComponent,
    ContactPageComponent,
    PresentationSectionComponent,
    InfoSectionComponent,
    MapSectionComponent,
    FaqComponent,
    SectionPricingComponent,
    SectionCalcPriceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RippleModule,
    CarouselModule,
    GalleriaModule,
    TimelineModule,
    SplitterModule,
    AnimateModule,
    CardModule,
    ButtonModule,
    RatingModule,
    InputTextModule,
    DialogModule,
    MenuModule,
    AccordionModule,
    CheckboxModule,
    DividerModule,
    InputNumberModule,
    SliderModule, 
    DragDropModule,
    DropdownModule,
    FormsModule
    
  ],
  providers: [
    {
      provide: WINDOW, 
      useValue: window
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
