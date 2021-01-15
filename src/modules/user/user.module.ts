import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { UserRoutingModule, COMPONENTS } from "./user-routing.module";
import { ModalModule } from "./components/modal/modal.module";

const IMPORTS = [
  CommonModule,
  FormsModule,
  UserRoutingModule,
  ModalModule,
  HttpClientModule,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...IMPORTS],
  providers: [],
  exports: [...IMPORTS],
})
export class UserModule {}
