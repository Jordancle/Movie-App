import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDummyComponent } from './movie-dummy.component';

describe('MovieDummyComponent', () => {
  let component: MovieDummyComponent;
  let fixture: ComponentFixture<MovieDummyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDummyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
