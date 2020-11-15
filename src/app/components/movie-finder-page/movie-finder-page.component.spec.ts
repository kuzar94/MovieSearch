import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFinderPageComponent } from './movie-finder-page.component';

describe('MovieFinderPageComponent', () => {
  let component: MovieFinderPageComponent;
  let fixture: ComponentFixture<MovieFinderPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieFinderPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieFinderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
