import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Angular Intern Project Movie App - Jordan Le';
  description = 'This app allows users to search and see details ' +
  'of movies within the Open Movie Database';

  constructor() { }

  ngOnInit() {
  }

}
