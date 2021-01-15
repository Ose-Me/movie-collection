import { Component, OnInit } from "@angular/core";
import { MovieListService } from "../../services/movie-list.service";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.scss"],
})
export class MovieListComponent implements OnInit {
  movies: any;

  constructor(private movieListService: MovieListService) {
    this.movies = this.movieListService
      .getMovies()
      .then((data: any) => {
        this.movies = data.content;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  ngOnInit(): void {}
}
