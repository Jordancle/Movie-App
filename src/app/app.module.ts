import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { SearchModuleModule } from './search-module/search-module.module';
// import { MovieSearchComponent } from './movie-search/movie-search.component';

import { HomeModuleModule } from './home-module/home-module.module';
import { DetailsModuleModule } from './details-module/details-module.module';
import { RatedModule } from './rated-module/rated.module';
import { HttpClientModule } from '@angular/common/http';

import { AlertModule } from 'ngx-bootstrap';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SearchModuleModule,
    HomeModuleModule,
    DetailsModuleModule,
    RatedModule,
    HttpClientModule,
    AlertModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
