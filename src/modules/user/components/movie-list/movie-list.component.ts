import { Component, OnInit } from "@angular/core";
import { MovieListService } from "../../services/movie-list.service";
import { LoginService } from "../../services/login.service";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.scss"],
})
export class MovieListComponent implements OnInit {
  movies: any;
  loading: boolean = true;
  user: any;
  loggedIn: boolean;

  constructor(
    private movieListService: MovieListService,
    private loginService: LoginService
  ) {
    this.movies = this.movieListService
      .getMovies()
      .then((data: any) => {
        this.movies = data.content;
        this.loading = false;
      })
      .catch((error) => {
        console.log(error);
        this.loading = false;
      });
  }

  ngOnInit() {
    this.loggedIn = this.loginService.isLoggedIn();
  }

  logout() {
    this.loginService.logout();
  }
}
