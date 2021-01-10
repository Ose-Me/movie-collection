import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { MovieComponent } from "./components/movie/movie.component";
import { MovieListComponent } from "./components/movie-list/movie-list.component";

export const COMPONENTS = [
  MovieListComponent,
  MovieComponent,
  LoginComponent,
  RegisterComponent,
];

const routes: Routes = [
  {
    path: "",
    component: MovieListComponent,
    children: [
      {
        path: "movie",
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
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: "reload",
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class UserRoutingModule {}
