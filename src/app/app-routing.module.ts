import { NgModule } from '@angular/core';
import { NavigationEnd, Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { QuotePageComponent } from './components/quote-page/quote-page.component';
import { SectionAboutusComponent } from './components/home/components/section-aboutus/section-aboutus.component';
import { SectionOurservicesComponent } from './components/home/components/section-ourservices/section-ourservices.component';
import { SectionWorkflowComponent } from './components/home/components/section-workflow/section-workflow.component';
import { SectionHappyClientsComponent } from './components/home/components/section-happy-clients/section-happy-clients.component';
import { FaqComponent } from './components/home/components/section-faq/faq.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quote', component: QuotePageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'section-about', component: SectionAboutusComponent },
  { path: 'section-ourservices', component: SectionOurservicesComponent },
  { path: 'section-ourprocess', component: SectionWorkflowComponent },
  { path: 'section-happycustomer', component: SectionHappyClientsComponent },
  { path: 'section-faq', component: FaqComponent },
  
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Esto lleva la página al principio al cargar una nueva ruta
      }
    });
  }
}
