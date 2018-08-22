import { Component, OnInit, Input } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap';
import { MovieServiceService } from 'src/app/movie-service.service';
import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {
  
  @Input() currentPage: number;
  @Input() totalItems: number;
  @Output() pageChanged = new EventEmitter<PageChangedEvent>();
  // @Input() loading: boolean;

  constructor(
    private movieService: MovieServiceService,
    private route: ActivatedRoute,
    private router: Router,
  ) { 
    // this.currentPage = +this.route.snapshot.paramMap.get('page');
  }

  onPageChanged(eventArgs: PageChangedEvent) {
    // this.loading = true;
    this.pageChanged.emit(eventArgs);
  }

}
