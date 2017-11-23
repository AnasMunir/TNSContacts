import { Component, OnInit, ViewContainerRef, NgZone } from "@angular/core";
import { ModalDialogService } from "nativescript-angular/modal-dialog";

import { Contact } from "../../models/contacts.model";
import { ContactsService } from "../../services/contacts.service";
import { ContactModalComponent } from "../contact-modal/contact.modal";
import { BehaviorSubject, Observable } from "rxjs";
import { concat } from "rxjs/operator/concat";

@Component({
    selector: "contact-list",
    moduleId: module.id,
    templateUrl: "./contact-list.component.html",
    styleUrls: ["./contact-list.component.scss"]
})
export class ContactListComponent implements OnInit {
    contacts: Contact[];
    test$: Observable<any>;
    path: string = 'firstName';

    constructor(
        private ngZone: NgZone,
        private contactsService: ContactsService,
        private modal: ModalDialogService,
        private vcRef: ViewContainerRef) { }

    ngOnInit(): void {
        this.getContacts();
    }

    getContacts() {
        this.contactsService.getContacts().subscribe((contacts: any) => {
            console.log("contacts");
            console.dir(contacts);
            this.contacts = contacts;
        })
    }

    showModal() {
        let options = {
            context: {},
            fullscreen: true,
            viewContainerRef: this.vcRef
        };

        this.modal.showModal(ContactModalComponent, options).then((res: Contact) => {
            this.ngZone.run(() => {
                if (res) {
                    this.contacts.push(res);
                }
            })
        });
    }

    saveContacts() {
        this.contactsService.saveContact(this.contacts)
            .then((res) => {
                console.log(res);
            });
    }

    change() {
        this.path = this.path === 'firstName' ? 'lastName' : 'firstName';
    }
}