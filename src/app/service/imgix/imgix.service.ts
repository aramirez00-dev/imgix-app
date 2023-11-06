import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ImgixClient from '@imgix/js-core';
import { Observable } from 'rxjs';
import { ImageService } from '../image/image.service';

@Injectable({
  providedIn: 'root',
})
export class ImgixService {
  private imgixClient: ImgixClient;

  private galleryEndpoint = 'https://storage.googleapis.com/nanlabs-engineering-technical-interviews/imgix-samples-list.json';
  private operationsEndpoint = 'https://raw.githubusercontent.com/imgix/imgix-url-params/master/dist/parameters.json';
  private myDomain="https://nanlabs-aramirez-angular-test.imgix.net/"

  constructor(private http: HttpClient, private imageService: ImageService) {
    this.imgixClient = new ImgixClient({ domain: 'nanlabs-aramirez-angular-test.imgix.net',
                                         secureURLToken: 'RVhP8vcugpbTxFMN'});
    console.log(this.imgixClient.domain)
  }

  getGallery(): Observable<any[]> {
    return this.http.get<any[]>(this.galleryEndpoint);
  }

  getOperationsValues(): Observable<string[]> {
    return this.http.get<string[]>(this.operationsEndpoint);
  }

  public buildImageUrlFromFormValues(formValues: any): string {
    let imageUrl = this.imageService.getWorkspaceImage();

    // remuevo todo lo que le sigue al '?' para quedarme con la imagen original
    imageUrl = imageUrl.split('?')[0];

    imageUrl = this.imgixClient.buildURL(imageUrl, {  flip: formValues.selectedFlip,
                                                      orient: formValues.selectedOrientation,
                                                      rot: formValues.selectedRotation,
                                                      bri: formValues.selectedBrightness,
                                                      con: formValues.selectedContrast,
                                                      exp: formValues.selectedExposure,
                                                      gam: formValues.selectedGamma,
                                                      high: formValues.selectedHighlight,
                                                      hue: formValues.selectedHue,
                                                      invert: formValues.selectedInvert,
                                                      sat: formValues.selectedSaturation,
                                                      shad: formValues.selectedShadow,
                                                      sharp: formValues.selectedSharpness,
                                                      usm: formValues.selectedUnsharpMask,
                                                      usmrad: formValues.selectedUnsharpRadius,
                                                      vib: formValues.selectedVibrance },
                                                      { disablePathEncoding : true })
                                                      // aplico un slice para remover el dominio configurado por mi, y simplemente traerme la imagen con sus modificaciones
                                                      // esto se debe a que diseñé la app configurando mi propia URL y token, suponiendo que generaría la URL en base a la indicada sin que mi dominio interfiera
                                                      // al ver que no se dió así, creé este workaround para no refactorizar demasiado
                                                      .slice(this.myDomain.length);
    console.log(imageUrl);
    return imageUrl;
  }
}
