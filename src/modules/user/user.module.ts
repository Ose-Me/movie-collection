import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ToastrModule } from "ngx-toastr";
import { UserRoutingModule, COMPONENTS } from "./user-routing.module";
import { ModalModule } from "./components/modal/modal.module";

const IMPORTS = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  UserRoutingModule,
  ModalModule,
  HttpClientModule,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    ...IMPORTS,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  exports: [...IMPORTS],
})
export class UserModule {}
