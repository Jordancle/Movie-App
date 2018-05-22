import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsModuleRoutingModule } from './/details-module-routing.module';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    DetailsModuleRoutingModule,
    RouterModule
  ],
  declarations: [DetailsComponent]
})
export class DetailsModuleModule { }
