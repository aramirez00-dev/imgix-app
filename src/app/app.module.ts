import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { WorkspaceComponent } from './component/workspace/workspace.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { BottomBarComponent } from './component/bottom-bar/bottom-bar.component';
import { HistoryService } from './service/history/history.service';
import { ImgixService } from './service/imgix/imgix.service';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ImageService } from './service/image/image.service';
import { FormService } from './service/form/form.service';

@NgModule({
  declarations: [
    AppComponent,
    WorkspaceComponent,
    GalleryComponent,
    SidebarComponent,
    BottomBarComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [
    HistoryService,
    ImgixService,
    ImageService,
    FormService
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }
