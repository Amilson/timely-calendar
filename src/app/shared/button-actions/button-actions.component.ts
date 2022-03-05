import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'shared-button-actions',
  templateUrl: './button-actions.component.html',
  styleUrls: ['./button-actions.component.scss']
})
export class SharedButtonActionsComponent extends BaseComponent {
  @Input() type: string = 'primary';

  @Input() color: string = 'theme';

  @Input() disabled: boolean = false;

  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    super();
  }
}
