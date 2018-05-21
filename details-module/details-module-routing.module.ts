import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: 'movie/:id', component: DetailsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) // This is where you pass your routes in
  ],
  exports: [ ],
  declarations: []
})
export class DetailsModuleRoutingModule { }
