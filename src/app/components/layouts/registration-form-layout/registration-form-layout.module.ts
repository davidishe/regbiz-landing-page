import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationFormLayoutComponent } from './registration-form-layout.component';
import { SubtitleModule } from '../../kit/titles/subtitle/subtitle.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomInputModule } from '../../kit/inputs/custom-input/custom-input.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '../../kit/buttons/mat-button/mat-button.module';



@NgModule({
  declarations: [
    RegistrationFormLayoutComponent
  ],
  imports: [
    CommonModule,
    SubtitleModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    CustomInputModule,
    MatButtonModule
  ],
  exports: [
    RegistrationFormLayoutComponent
  ]
})
export class RegistrationFormLayoutModule { }
