import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationsService {

  // private observer: IntersectionObserver;

  // constructor() {
  //   this.observer = new IntersectionObserver(this.triggerAnimation, { 
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 1
  //   });
  // }

  // private triggerAnimation(entries: IntersectionObserverEntry[]){
  //   entries.forEach(entry => {
  //       const text = entry.target.querySelector('.text-header-section');
  //       if(text)
  //         text.classList.toggle('unset', entry.isIntersecting);
  //   });
  // }

  // public observeTextHeaders(textHeaders: NodeListOf<Element>) {
  //   textHeaders.forEach(text => {
  //     this.observer.observe(text);
  //   });
  // }

  private observers: IntersectionObserver[] = [];

  observe(element: HTMLElement, callback: () => void): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.8 } // Ajusta el umbral según tus necesidades
    );

    observer.observe(element);
    this.observers.push(observer);
  }

}
