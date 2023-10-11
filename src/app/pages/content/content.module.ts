import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContentComponent,
    NgModule
  ],
  exports: [
    ContentComponent, 
  ]
})
export class ContentModule { }
