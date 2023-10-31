import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationsService {

  private observer: IntersectionObserver;

  constructor() {
    this.observer = new IntersectionObserver(this.triggerAnimation, { 
      root: null,
      rootMargin: "0px",
      threshold: 1
    });
  }

  private triggerAnimation(entries: IntersectionObserverEntry[]){
    entries.forEach(entry => {
        const text = entry.target.querySelector('.text-header-section');
        if(text)
          text.classList.toggle('unset', entry.isIntersecting);
    });
  }

  public observeTextHeaders(textHeaders: NodeListOf<Element>) {
    textHeaders.forEach(text => {
      this.observer.observe(text);
    });
  }
}
