import { Injectable, NgZone } from "@angular/core";

import { Contact } from "../models/contacts.model";
import * as appSettings from "application-settings";
import firebase = require('nativescript-plugin-firebase');
import { Observable, BehaviorSubject } from 'rxjs';
import { observe } from "tns-core-modules/ui/gestures/gestures";

@Injectable()
export class ContactsService {

    constructor(private ngZone: NgZone) {}

    getContacts(): Observable<any> {
        return new Observable((observer: any) => {
            let  onValueEvent = (result) => {
                this.ngZone.run(() => {
                    console.log("Event type: " + result.type);
                    console.log("Key: " + result.key);
                    console.log("Value: " + result.value);
                    let contacts;
                    if (result.value) {
                        contacts = result.value
                    } else {
                        contacts = [];
                    }
                    observer.next(contacts);
                })
            };
            firebase.addValueEventListener(onValueEvent, `/Contacts`);
        }).share();
        
        // // listen to changes in the /companies path
        // firebase.addValueEventListener(onValueEvent, "/companies").then(
        //     (listenerWrapper) => {
        //         var path = listenerWrapper.path;
        //         var listeners = listenerWrapper.listeners; // an Array of listeners added
        //         // you can store the wrapper somewhere to later call 'removeEventListeners'
        //     }
        // );
        // let contacts = appSettings.getString('contacts');
        // if (contacts) {
        //     // this.contacts = JSON.parse(contacts);
        //     return JSON.parse(contacts);
        // }
        // return [];
    }

    saveContact(value: Contact[]) {
        return firebase.setValue(
            '/Contacts',
            value
        );
        // appSettings.setString('contacts', JSON.stringify(value));
    }
    // getContacts(): Contact[] {
    //     let contacts = appSettings.getString('contacts');
    //     if (contacts) {
    //         // this.contacts = JSON.parse(contacts);
    //         return JSON.parse(contacts);
    //     }
    //     return [];
    // }

    // saveContact(value: Contact[]) {
    //     appSettings.setString('contacts', JSON.stringify(value));
    // }
}
