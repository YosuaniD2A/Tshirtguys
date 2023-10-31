
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SmoothScrollService {
  scrollToElement(element: HTMLElement) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}