// history.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  private history: string[] = [];
  private currentIndex = -1;

  private historySubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  history$: Observable<string[]> = this.historySubject.asObservable();

  constructor() {
    this.currentIndex = 0;
  }

  addToHistory(imageUrl: string) {
    if (this.currentIndex < this.history.length - 1) {
      this.history = this.history.slice(0, this.currentIndex + 1);
    }

    this.history.push(imageUrl);
    this.currentIndex = this.history.length - 1;
    this.historySubject.next(this.history);

    for (let i=0; i< this.history.length; i++){
      console.log(this.history[i]);
    }
  }

  undo() {
    if (this.canUndo()) {
      this.currentIndex--;
      this.historySubject.next(this.history);
    }
  }

  redo() {
    if (this.canRedo()) {
      this.currentIndex++;
      this.historySubject.next(this.history);
    }
  }

  canUndo(): boolean {
    return this.currentIndex > 0;
  }

  canRedo(): boolean {
    return this.currentIndex < this.history.length - 1;
  }

  getCurrentImage(): string {
      return this.history[this.currentIndex];
  }

  get currentPlaceInHistory(): number {
    return this.currentIndex;
  }

  get historyLength(): number {
    return this.history.length;
  }

  cleanHistory() {
    this.history = [];
    this.currentIndex = 0;
    this.historySubject.next(this.history);
  }
}
