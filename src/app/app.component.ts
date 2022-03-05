import { Component } from '@angular/core';
import { StyleService } from './core/services/style/style.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'timely-calendar';

  constructor(private styleService: StyleService) {
    this.styleService.boostrap();
  }
}
