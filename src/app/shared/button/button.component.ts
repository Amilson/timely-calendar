import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'shared-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class SharedButtonComponent extends BaseComponent {
  @Input() type: string = 'primary';

  @Input() color: string = 'theme';

  @Input() disabled: boolean = false;

  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    super();
  }
}
