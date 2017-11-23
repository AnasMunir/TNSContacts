import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

// import { ItemsComponent } from "./item/items.component";
import { ContactListComponent } from "./modules/contacts/components/contact-list/contact-list.component";


const routes: Routes = [
    { path: "", redirectTo: "/contact-list", pathMatch: "full" },
    { path: "contact-list", component: ContactListComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }