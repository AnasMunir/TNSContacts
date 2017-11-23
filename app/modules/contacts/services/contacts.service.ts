import { Injectable } from "@angular/core";

import { Contact } from "../models/contacts.model";

@Injectable()
export class ContactsService {
    private contacts = new Array<Contact>(
        { firstName: 'Anas', lastName: "Munir", phoneNumber: 23123 }
    );

    getContacts(): Contact[] {
        return this.contacts;
    }

    pushContact(contact: Contact) {
        this.contacts.push(contact);
    }

    // getItem(id: number): Item {
    //     return this.items.filter(item => item.id === id)[0];
    // }
}
