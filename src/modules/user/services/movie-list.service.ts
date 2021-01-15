import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class MovieListService {
  constructor(private http: HttpClient) {}

  getMovies() {
    const url = "https://wootlab-moviedb.herokuapp.com/api/movie/list";
    return this.http.get(url).toPromise();
  }
}
