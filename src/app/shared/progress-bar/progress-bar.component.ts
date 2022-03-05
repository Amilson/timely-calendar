import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SharedProgressBarService } from './progress-bar.service';

@Component({
  selector: 'shared-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SharedProgressBarComponent implements OnInit {
  visible: boolean = false;

  constructor(private progressBarService: SharedProgressBarService) {
    // not to do
  }

  ngOnInit() {
    this.progressBarService.visibleConfig().subscribe((visible: boolean) => {
      this.visible = visible;
    });
  }
}
