import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

// import { environment } from "@environments/environment";
import { User } from "../models/user";

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  register(user: User) {
    return this.http
      .post(`https://wootlab-moviedb.herokuapp.com/api/user/create`, user)
      .toPromise();
  }
}
