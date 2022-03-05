import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'shared-others-filters-choose',
  templateUrl: './others-filters-choose.component.html',
  styleUrls: ['./others-filters-choose.component.scss']
})
export class SharedOthersFiltersChooseComponent extends BaseComponent {
  private isAbleToClickout = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    super();
  }

  open() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'inline');
    setTimeout(() => {
      this.isAbleToClickout = true;
    }, 0);
  }

  close() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'none');
    setTimeout(() => {
      this.isAbleToClickout = false;
    }, 0);
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (this.isAbleToClickout) {
      if (!this.elementRef.nativeElement.contains(event.target)) {
        this.close();
        this.isAbleToClickout = false;
      }
    }
  }
}
