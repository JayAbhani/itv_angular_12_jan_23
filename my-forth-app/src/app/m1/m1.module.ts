import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { M1c1Component } from './m1c1/m1c1.component';
import { M2Module } from '../m2/m2.module';



@NgModule({
  declarations: [
    M1c1Component
  ],
  imports: [
    CommonModule,
    M2Module
  ],
  exports: [
    M1c1Component
  ]
})
export class M1Module { }
