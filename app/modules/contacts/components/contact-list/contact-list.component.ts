import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { ModalDialogService } from "nativescript-angular/modal-dialog";

import { Contact } from "../../models/contacts.model";
import { ContactsService } from "../../services/contacts.service";
import { ContactModalComponent } from "../contact-modal/contact.modal";

@Component({
    selector: "contact-list",
    moduleId: module.id,
    templateUrl: "./contact-list.component.html",
})
export class ContactListComponent implements OnInit {
    contacts: Contact[];

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(
        private contactsService: ContactsService,
        private modal: ModalDialogService,
        private vcRef: ViewContainerRef) { }

    ngOnInit(): void {
        this.contacts = this.contactsService.getContacts();
    }

    add() {
        console.log('boom');
    }
    public showModal() {
        let options = {
            context: {},
            fullscreen: true,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(ContactModalComponent, options).then((res: Contact) => {
            this.contactsService.pushContact(res);
        });
    }
}