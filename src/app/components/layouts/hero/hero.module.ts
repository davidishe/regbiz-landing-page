import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { BannerComponent } from '../banner/banner.component';
import { BannerBigModule } from '../banner-big/banner-big.module';
import { MatButtonModule } from '../../kit/buttons/mat-button/mat-button.module';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconSectionLayoutModule } from '../icon-section-layout/icon-section-layout.module';
import { SectionOfferModule } from '../section-offer/section-offer.module';
import { StepsLayoutModule } from '../steps-layout/steps-layout.module';
import { RegistrationFormLayoutModule } from '../registration-form-layout/registration-form-layout.module';

@NgModule({
  declarations: [
    HeroComponent,
    BannerComponent,
  ],
  imports: [
    CommonModule,
    BannerBigModule,
    MatButtonModule,
    RouterModule,
    MatTooltipModule,
    IconSectionLayoutModule,
    SectionOfferModule,
    StepsLayoutModule,
    RegistrationFormLayoutModule
  ],
  exports: [
    HeroComponent,
    BannerComponent
  ]
})
export class HeroModule { }
