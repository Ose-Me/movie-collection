import { Component, OnInit } from "@angular/core";
import { LoginService } from "../../services/login.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean;
  user: any;
  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.loggedIn = this.loginService.isLoggedIn();

    this.user = this.loginService.userValue;
    console.log(this.user);
  }

  logout() {
    this.loginService.logout();
  }
}
