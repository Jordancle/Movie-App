import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchModuleRoutingModule } from './/search-module-routing.module';
import { MovieSearchComponent } from 'src/app/search-module/movie-search/movie-search.component';
import { MovieDummyComponent } from './movie-dummy/movie-dummy.component';
import { PageComponent } from './page/page.component';
import { PaginationModule } from 'ngx-bootstrap';
import { RatingComponent } from './rating/rating.component';
import { RatingModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SearchModuleRoutingModule,
    PaginationModule.forRoot(),
    RatingModule.forRoot(),
    RouterModule,
    FormsModule
  ],
  declarations: [ MovieSearchComponent, MovieDummyComponent, PageComponent, RatingComponent ]
})
export class SearchModuleModule { }
