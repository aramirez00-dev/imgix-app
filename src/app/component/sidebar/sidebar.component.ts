import { Component, OnInit, ViewChild } from '@angular/core';
import { ImgixService } from '../../service//imgix/imgix.service';
import { AdjustmentOperationsOptions, Operations, RotationOperationsOptions } from 'src/assets/resources/utils';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HistoryService } from 'src/app/service/history/history.service';
import { ImageService } from 'src/app/service/image/image.service';
import { FormService } from 'src/app/service/form/form.service';

  @Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
  })
  export class SidebarComponent implements OnInit {
    // utilizo reactive forms
    sidebarForm: FormGroup;

    rotationOptions!: RotationOperationsOptions;
    adjustmentOptions!: AdjustmentOperationsOptions;

    constructor(private imgixService: ImgixService, private imageService: ImageService, private formBuilder: FormBuilder, private historyService: HistoryService, private formService: FormService) {
      this.sidebarForm = this.formBuilder.group({
        selectedFlip: [''],
        selectedOrientation: [''],
        selectedRotation: [0],
        selectedBrightness: [0],
        selectedContrast: [0],
        selectedExposure: [0],
        selectedGamma: [0],
        selectedHighlight: [0],
        selectedHue: [0],
        selectedInvert: [false],
        selectedSaturation: [0],
        selectedShadow: [0],
        selectedSharpness: [0],
        selectedUnsharpMask: [0],
        selectedUnsharpRadius: [0],
        selectedVibrance: [0],
      });

      this.formService.resetForm$.subscribe(() => {
        this.resetFormValues();
      });
    }

    ngOnInit() {
        this.imgixService.getOperationsValues().subscribe((parameters) => {
        this.rotationOptions = this.filterRotationOptions(parameters);
        this.adjustmentOptions = this.filterAdjustmentOptions(parameters);
      });
    }

    updateImage(formValues: any) {
      const updatedImageUrl = this.imgixService.buildImageUrlFromFormValues(formValues);
      this.imageService.setWorkspaceImage(updatedImageUrl,false);
      this.historyService.addToHistory(updatedImageUrl);
    }

    resetFormValues() {
      this.sidebarForm.reset();
    }

    private filterRotationOptions(parameters: any) : RotationOperationsOptions{
      return {
        flipOptions: parameters[Operations.PARAMS][Operations.FLIP][Operations.EXPECTS][0][Operations.POSSIBLE_VALUES],
        orientOptions: parameters[Operations.PARAMS][Operations.ORIENT][Operations.EXPECTS][0][Operations.POSSIBLE_VALUES],
        rotMin: parameters[Operations.PARAMS][Operations.ROT][Operations.EXPECTS][0][Operations.SUGGESTED_RANGE][Operations.MIN],
        rotMax: parameters[Operations.PARAMS][Operations.ROT][Operations.EXPECTS][0][Operations.SUGGESTED_RANGE][Operations.MAX],
      };
    }

    private filterAdjustmentOptions(parameters: any): AdjustmentOperationsOptions {
      return {
        briMin: parameters[Operations.PARAMS][Operations.BRI][Operations.EXPECTS][0][Operations.SUGGESTED_RANGE][Operations.MIN],
        briMax: parameters[Operations.PARAMS][Operations.BRI][Operations.EXPECTS][0][Operations.SUGGESTED_RANGE][Operations.MAX],
        conMin: parameters[Operations.PARAMS][Operations.CON][Operations.EXPECTS][0][Operations.SUGGESTED_RANGE][Operations.MIN],
        conMax: parameters[Operations.PARAMS][Operations.CON][Operations.EXPECTS][0][Operations.SUGGESTED_RANGE][Operations.MAX],
        expMin: parameters[Operations.PARAMS][Operations.EXP][Operations.EXPECTS][0][Operations.SUGGESTED_RANGE][Operations.MIN],
        expMax: parameters[Operations.PARAMS][Operations.EXP][Operations.EXPECTS][0][Operations.SUGGESTED_RANGE][Operations.MAX],
        gamMin: parameters[Operations.PARAMS][Operations.GAM][Operations.EXPECTS][0][Operations.SUGGESTED_RANGE][Operations.MIN],
        gamMax: parameters[Operations.PARAMS][Operations.GAM][Operations.EXPECTS][0][Operations.SUGGESTED_RANGE][Operations.MAX],
        highMin: parameters[Operations.PARAMS][Operations.HIGH][Operations.EXPECTS][0][Operations.SUGGESTED_RANGE][Operations.MIN],
        highMax: parameters[Operations.PARAMS][Operations.HIGH][Operations.EXPECTS][0][Operations.SUGGESTED_RANGE][Operations.MAX],
        hueMin: parameters[Operations.PARAMS][Operations.HUE][Operations.EXPECTS][0][Operations.SUGGESTED_RANGE][Operations.MIN],
        hueMax: parameters[Operations.PARAMS][Operations.HUE][Operations.EXPECTS][0][Operations.SUGGESTED_RANGE][Operations.MAX],
        isInverted: false,
        satMin: parameters[Operations.PARAMS][Operations.SAT][Operations.EXPECTS][0][Operations.SUGGESTED_RANGE][Operations.MIN],
        satMax: parameters[Operations.PARAMS][Operations.SAT][Operations.EXPECTS][0][Operations.SUGGESTED_RANGE][Operations.MAX],
        shadMin: parameters[Operations.PARAMS][Operations.SHAD][Operations.EXPECTS][0][Operations.SUGGESTED_RANGE][Operations.MIN],
        shadMax: parameters[Operations.PARAMS][Operations.SHAD][Operations.EXPECTS][0][Operations.SUGGESTED_RANGE][Operations.MAX],
        sharpMin: parameters[Operations.PARAMS][Operations.SHARP][Operations.EXPECTS][0][Operations.SUGGESTED_RANGE][Operations.MIN],
        sharpMax: parameters[Operations.PARAMS][Operations.SHARP][Operations.EXPECTS][0][Operations.SUGGESTED_RANGE][Operations.MAX],
        usmMin: parameters[Operations.PARAMS][Operations.USM][Operations.EXPECTS][0][Operations.SUGGESTED_RANGE][Operations.MIN],
        usmMax: parameters[Operations.PARAMS][Operations.USM][Operations.EXPECTS][0][Operations.SUGGESTED_RANGE][Operations.MAX],
        usmradMin: parameters[Operations.PARAMS][Operations.USMRAD][Operations.EXPECTS][0][Operations.SUGGESTED_RANGE][Operations.MIN],
        usmradMax: 500,
        vibMin: parameters[Operations.PARAMS][Operations.VIB][Operations.EXPECTS][0][Operations.SUGGESTED_RANGE][Operations.MIN],
        vibMax: parameters[Operations.PARAMS][Operations.VIB][Operations.EXPECTS][0][Operations.SUGGESTED_RANGE][Operations.MAX]
      };
    }


  }
