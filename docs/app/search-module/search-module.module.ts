import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchModuleRoutingModule } from './/search-module-routing.module';
import { MovieSearchComponent } from 'src/app/search-module/movie-search/movie-search.component';
import { MovieDummyComponent } from './movie-dummy/movie-dummy.component';

@NgModule({
  imports: [
    CommonModule,
    SearchModuleRoutingModule
  ],
  declarations: [ MovieSearchComponent, MovieDummyComponent ]
})
export class SearchModuleModule { }
