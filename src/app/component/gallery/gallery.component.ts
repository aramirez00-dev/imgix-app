import { Component, OnInit } from '@angular/core';
import { ImgixService } from '../../service/imgix/imgix.service';
import { ImageService } from '../../service/image/image.service';
import { HistoryService } from 'src/app/service/history/history.service';
import { FormService } from '../../service/form/form.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  images: any[] = [];

  constructor(private galleryDataService: ImgixService, private imageService: ImageService, private historyService: HistoryService, private formService: FormService) {}

  ngOnInit() {
    this.galleryDataService.getGallery().subscribe((data) => {
      this.images = data;
    });
  }

  selectImage(image: string) {
    this.imageService.setWorkspaceImage(image, true);
    this.historyService.addToHistory(image);
    this.formService.resetForm();
  }
}
