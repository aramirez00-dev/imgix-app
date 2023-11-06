import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HistoryService } from '../history/history.service';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private workspaceImageSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  workspaceImage$: Observable<string> = this.workspaceImageSubject.asObservable();

  constructor(private historyService: HistoryService) {}

  setWorkspaceImage(imagePath: string, fromGallery: boolean) {
    // si es un url, proceso el imagePath como viene
    if (imagePath.startsWith('http') || imagePath.startsWith('https')) {
      this.workspaceImageSubject.next(imagePath);
    }
    // si es local, lo preparo antes de procesarlo
    else {
      const fullImageUrl = `assets/${imagePath}`;
      this.workspaceImageSubject.next(fullImageUrl);
    }
    // verifico el flag que indica si la selección se produjo desde la galería
    if(fromGallery){
      // de ser así, indica un cambio de imagen, por lo que se limpia el historial
      this.historyService.cleanHistory();
    }
  }

  getWorkspaceImage(): string {
    return this.workspaceImageSubject.value;
  }
}
