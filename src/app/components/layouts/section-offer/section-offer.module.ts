import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionOfferComponent } from './section-offer.component';
import { SubtitleModule } from '../../kit/titles/subtitle/subtitle.module';



@NgModule({
  declarations: [
    SectionOfferComponent
  ],
  imports: [
    CommonModule,
    SubtitleModule
  ],
  exports:
  [
    SectionOfferComponent
  ]
})
export class SectionOfferModule { }
