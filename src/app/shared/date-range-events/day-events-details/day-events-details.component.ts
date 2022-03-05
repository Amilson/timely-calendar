import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Renderer2
} from '@angular/core';

@Component({
  selector: 'shared-date-range-day-events-details',
  templateUrl: './day-events-details.component.html',
  styleUrls: ['./day-events-details.component.scss']
})
export class SharedDateRangeDayEventsDetailsComponent implements AfterViewInit {
  @Input()
  model: {
    [key: string]: {
      [key: number]: any[];
    };
  }[] = [];

  @Input() onShow = new EventEmitter<any>();

  private slideIndex = 1;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    // not to do
  }

  ngAfterViewInit(): void {
    this.onShow.subscribe((visability: boolean) => {
      setTimeout(() => {
        this.onHandleVisability(visability);
      }, 200);
    });
    if (this.model && this.model.length && this.model.length > 1) {
      this.showSlides(1);
    }
  }

  onHandleVisability(visible = false) {
    const { elementRef, renderer } = this;
    const el = elementRef.nativeElement;

    const { innerWidth } = window;
    renderer.setStyle(el, 'display', visible ? 'block' : 'none');

    const hostPos = el.getBoundingClientRect();
    if (hostPos.right > innerWidth) {
      renderer.setStyle(el, 'right', '12px');
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
    const slides = this.elementRef.nativeElement.getElementsByClassName('slides');

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
