import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { UserRoutingModule, COMPONENTS } from "./user-routing.module";
import { ModalModule } from "../modal/modal.module";

const IMPORTS = [CommonModule, FormsModule, UserRoutingModule, ModalModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...IMPORTS],
  providers: [],
  exports: [...IMPORTS],
})
export class UserModule {}
