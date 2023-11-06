import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../../service/history/history.service';
import { ImageService } from 'src/app/service/image/image.service';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss'],
})
export class BottomBarComponent implements OnInit {
  constructor(private historyService: HistoryService, private imageService: ImageService) {}

  ngOnInit() {
    this.historyService.history$.subscribe((history) => {
      const currentImage = history[this.historyService.currentPlaceInHistory];
      this.imageService.setWorkspaceImage(currentImage, false);
    });
  }

  undo() {
    this.historyService.undo();
  }

  redo() {
    this.historyService.redo();
  }

  canUndo(): boolean {
    return this.historyService.canUndo();
  }

  canRedo(): boolean {
    return this.historyService.canRedo();
  }

  get currentPlaceInHistory(): number {
    return this.historyService.currentPlaceInHistory;
  }

  get historyLength(): number {
    return this.historyService.historyLength;
  }
}
