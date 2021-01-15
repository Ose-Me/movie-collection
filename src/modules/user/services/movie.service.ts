import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovie(id) {
    const url = `https://wootlab-moviedb.herokuapp.com/api/movie/detail/${id}`;
    return this.http.get(url).toPromise();
  }
}
