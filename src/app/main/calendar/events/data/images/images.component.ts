import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';
import { BaseComponent } from 'app/shared';
import { CalendarEventImageModel } from '../../../providers';

@Component({
  selector: 'app-calendar-event-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class CalendarEventImagesComponent extends BaseComponent implements AfterViewInit {
  @Input() model: CalendarEventImageModel[] = [];

  _isLoading = true;

  private slideIndex = 1;

  constructor(private elementRef: ElementRef) {
    super();
  }

  ngAfterViewInit(): void {
    if (this.model && this.model.length && this.model.length > 1) {
      this.showSlides(1);
    }
  }

  // Next/previous controls
  onHandleNextPrev(n: number) {
    this.showSlides((this.slideIndex += n));
  }

  // Thumbnail image controls
  currentSlide(n: number) {
    this.slideIndex = n;
    this.showSlides(n);
  }

  showSlides(n: number) {
    let i = 0;
    const slides: any = this.elementRef.nativeElement.getElementsByClassName('slides');
    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i += 1) {
      slides[i].style.display = 'none';
    }
    slides[this.slideIndex - 1].style.display = 'block';
  }
}
