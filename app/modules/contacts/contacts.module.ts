import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { PROVIDERS } from "./services";
import { COMPONENTS } from "./components";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

@NgModule({
    imports: [NativeScriptModule, NativeScriptFormsModule, FormsModule, ReactiveFormsModule],
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS],
    entryComponents: [...COMPONENTS],
    providers: [...PROVIDERS],
    schemas: [NO_ERRORS_SCHEMA],
})
export class ContactsModule {

}