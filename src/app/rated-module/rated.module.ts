import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatedComponent } from './rated/rated.component';
import { RouterModule } from '@angular/router';

import { RatedRoutingModule } from './rated-routing.module';
import { RatingDetailsComponent } from './rating-details/rating-details.component';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap';
import { RatingModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RatedRoutingModule,
    RouterModule,
    PaginationModule.forRoot(),
    RatingModule.forRoot(),
    FormsModule
  ],
  declarations: [ RatedComponent, RatingDetailsComponent ]
})
export class RatedModule { }
