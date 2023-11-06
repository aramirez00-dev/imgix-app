import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private resetFormSource = new Subject<void>();

  resetForm$ = this.resetFormSource.asObservable();

  resetForm() {
    this.resetFormSource.next();
  }
}
