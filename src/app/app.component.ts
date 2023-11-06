import { Component } from '@angular/core';
import { ImageService } from './service/image/image.service';
import { HistoryService } from './service/history/history.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {

  private initialImage="https://assets.imgix.net/unsplash/alarmclock.jpg"

  constructor(private imageSelectionService: ImageService, private historyService: HistoryService) {
    this.imageSelectionService.setWorkspaceImage(this.initialImage,false);
    this.historyService.addToHistory(this.initialImage);
  }
}
