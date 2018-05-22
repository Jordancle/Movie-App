import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { MovieSearchComponent } from './movie-search/movie-search.component'

const routes: Routes = [
  { path: 'search', component: MovieSearchComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class SearchModuleRoutingModule { }
