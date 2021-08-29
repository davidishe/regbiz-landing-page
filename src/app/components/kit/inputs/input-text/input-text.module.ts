import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatBtnSmallModule } from '../../buttons/mat-btn-small/mat-btn-small.module';
import { InputTextComponent } from './input-text.component';



@NgModule({
  declarations: [
    InputTextComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatBtnSmallModule,
    RouterModule
  ],
  exports: [
    InputTextComponent
  ]
})
export class  InputTextModule { }
