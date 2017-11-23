import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { ModalDialogService } from "nativescript-angular/modal-dialog";

import { Contact } from "../../models/contacts.model";
import { ContactsService } from "../../services/contacts.service";
import { ContactModalComponent } from "../contact-modal/contact.modal";
import { BehaviorSubject } from "rxjs";

@Component({
    selector: "contact-list",
    moduleId: module.id,
    templateUrl: "./contact-list.component.html",
})
export class ContactListComponent implements OnInit {
    contacts: Contact[];
    contacts$: BehaviorSubject<Contact[]> = new BehaviorSubject(null);
    path: string = 'firstName';

    constructor(
        private contactsService: ContactsService,
        private modal: ModalDialogService,
        private vcRef: ViewContainerRef) { }

    ngOnInit(): void {
        this.getContacts();
    }

    getContacts() {
        let contacts = this.contactsService.getContacts();
        this.contacts = contacts;
        this.contacts$.next(this.contacts);
    }

    showModal() {
        let options = {
            context: {},
            fullscreen: true,
            viewContainerRef: this.vcRef
        };

        this.modal.showModal(ContactModalComponent, options).then((res: Contact) => {
            if (res) {
                this.contacts.push(res);
                this.contactsService.saveContact(this.contacts);
                this.getContacts();
            }
        });
    }

    change() {
        this.path = this.path === 'firstName' ? 'lastName' : 'firstName';
    }
}