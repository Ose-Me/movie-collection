import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { ToastrService } from "ngx-toastr";
import { LoginService } from "../../services/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
    // redirect if isLoggedIn is true
    if (this.loginService.isLoggedIn()) {
      this.router.navigate(["/"]);
    }
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.loginService
      .login(this.f.username.value, this.f.password.value)
      .then((data: any) => {
        console.log(data);
        this.loading = false;

        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem("user", JSON.stringify(data));

        // show successful toastre message
        this.toastr.success("", "Login Sucessful!");
        this.router.navigate(["/"], { relativeTo: this.route });
      })
      .catch((error) => {
        console.log(error);
        this.loading = false;

        // show error toastr message
        this.toastr.error(error.error, "An error occured");
      });
  }
}
