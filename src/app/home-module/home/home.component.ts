import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchKey: string = "";

  title = 'Angular Intern Project Movie App - Jordan Le';
  description = 'This app allows users to search and see details ' +
    'of movies within the Open Movie Database';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onEnter(searchKey: string) {
    this.searchKey = searchKey;
    //this.router.navigate(['/search/' + this.searchKey + '/1']);
    this.router.navigate(['search'], { queryParams: { searchKey: this.searchKey, page: 1 } });
  }

  onKey(searchKey: string) {
    let url = this.router.createUrlTree(['search'], { queryParams: { searchKey: this.searchKey, page: 1 } }).toString();
    this.searchKey = searchKey;
  }

  onClick() {
    this.onEnter(this.searchKey);
  }
}
