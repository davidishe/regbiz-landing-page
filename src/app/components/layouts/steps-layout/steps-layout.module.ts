import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsLayoutComponent } from './steps-layout.component';
import { SubtitleModule } from '../../kit/titles/subtitle/subtitle.module';



@NgModule({
  declarations: [StepsLayoutComponent],
  imports: [
    CommonModule,
    SubtitleModule
  ],
  exports: [StepsLayoutComponent]
})
export class StepsLayoutModule { }
