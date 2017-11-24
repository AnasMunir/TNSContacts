import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { PROVIDERS } from "./services";
import { COMPONENTS } from "./components";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { PIPES } from "../../pipes";
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        FormsModule,
        ReactiveFormsModule,
        TNSFontIconModule.forRoot({
            'mdi': 'material-design-icons.css'
        })],
    declarations: [...COMPONENTS, ...PIPES],
    exports: [...COMPONENTS, ...PIPES],
    entryComponents: [...COMPONENTS],
    providers: [...PROVIDERS],
    schemas: [NO_ERRORS_SCHEMA],
})
export class ContactsModule {

}