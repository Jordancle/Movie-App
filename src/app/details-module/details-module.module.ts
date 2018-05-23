import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsModuleRoutingModule } from './/details-module-routing.module';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    DetailsModuleRoutingModule,
    RouterModule,
    FormsModule,
    RatingModule.forRoot()
  ],
  declarations: [DetailsComponent]
})
export class DetailsModuleModule { }
