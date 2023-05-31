import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from '../../../services/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private service: MovieApiServiceService) {}
  ngOnInit(): void {
    this.bannerData();
    this.trendingMoviesData();
  }
  
  bannerResult: any = [];
  trendingMoviesResult: any = [];

  //banner data
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      this.bannerResult = result.results;
    });
  }
  // trending movies data
  trendingMoviesData() {
    this.service.trendingApiData().subscribe((result) => {
      this.trendingMoviesResult = result.results;
    });
  }
}
