import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PictureComponent } from './picture/picture.component';
import { HomeRouting } from './home-routing.module';


@NgModule({
  declarations: [PictureComponent],
  imports: [
    CommonModule,
    HomeRouting
  ]
})
export class HomeModule { }