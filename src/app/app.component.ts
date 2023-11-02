import { Component } from '@angular/core';
import { ImageService } from './service/image/image.service';
import { HistoryService } from './service/history/history.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private imageSelectionService: ImageService, private imageHistoryService: HistoryService) {
    // Set an initial image when the app starts
    this.imageSelectionService.setImageSelected('https://assets.imgix.net/unsplash/alarmclock.jpg');
  }
}