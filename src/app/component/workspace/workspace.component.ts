import { Component } from '@angular/core';
import { ImageService } from '../../service/image/image.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],
})
export class WorkspaceComponent {
  public imageService: ImageService;

  constructor(imageService: ImageService) {
    this.imageService = imageService;
  }

  setWorkspaceImage(imagePath: string) {
    this.imageService.setWorkspaceImage(imagePath,false);
  }
}
