import { Injectable } from "@angular/core";

import { Contact } from "../models/contacts.model";
import * as appSettings from "application-settings";

@Injectable()
export class ContactsService {

    getContacts(): Contact[] {
        let contacts = appSettings.getString('contacts');
        if (contacts) {
            // this.contacts = JSON.parse(contacts);
            return JSON.parse(contacts);
        }
        return [];
    }

    saveContact(value: Contact[]) {
        appSettings.setString('contacts', JSON.stringify(value));
    }
}
