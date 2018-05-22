import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModuleRoutingModule } from './/home-module-routing.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    HomeModuleRoutingModule,
    RouterModule  // Make sure to import this module for correct routing
  ],
  declarations: [ HomeComponent ]
})
export class HomeModuleModule { }
