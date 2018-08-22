import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { RatedComponent } from './rated/rated.component';
import { RatingDetailsComponent } from './rating-details/rating-details.component';

const routes: Routes = [
  { path: 'rated', component: RatedComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [ ]
})
export class RatedRoutingModule { }
