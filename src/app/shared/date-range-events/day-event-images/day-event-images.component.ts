import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';
import { DateRangeEventImagesModel } from 'app/model';
import { BaseComponent } from 'app/shared/base.component';

@Component({
  selector: 'shared-date-range-day-event-images',
  templateUrl: './day-event-images.component.html',
  styleUrls: ['./day-event-images.component.scss']
})
export class SharedDateRangeDayEventImagesComponent extends BaseComponent implements AfterViewInit {
  @Input() model: DateRangeEventImagesModel[] = [];

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

  onHandleNextPrev(n: number) {
    this.showSlides((this.slideIndex += n));
  }

  currentSlide(n: number) {
    this.slideIndex = n;
    this.showSlides(n);
  }

  showSlides(n: number) {
    let i = 0;
    const slides = this.elementRef.nativeElement.getElementsByClassName('slides-images');
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
