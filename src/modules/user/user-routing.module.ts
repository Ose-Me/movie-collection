import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { NavbarComponent } from "./components/navbar/navbar.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { MovieComponent } from "./components/movie/movie.component";
import { MovieListComponent } from "./components/movie-list/movie-list.component";

import { MovieListService } from "./services/movie-list.service";

export const COMPONENTS = [
  MovieListComponent,
  MovieComponent,
  NavbarComponent,
  LoginComponent,
  RegisterComponent,
];

const routes: Routes = [
  {
    path: "",
    component: MovieListComponent,
  },
  {
    path: "movie/:id",
    component: MovieComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: "reload",
      useHash: true,
    }),
  ],
  providers: [MovieListService],
  exports: [RouterModule],
})
export class UserRoutingModule {}
