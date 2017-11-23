import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
// import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { Contact } from "../../models/contacts.model";

@Component({
    selector: "contact-modal",
    moduleId: module.id,
    templateUrl: "./contact.modal.html",
})
export class ContactModalComponent {

    private contactsForm: FormGroup;
    public frameworks: Array<string>;
    // private contact: Contact = { firstName: 'Izzi', lastName: "Cat", phoneNumber: 23123 }

    public constructor(
        private params: ModalDialogParams,
        private formBuilder: FormBuilder) {

        this.contactsForm = formBuilder.group({
            firstName: ['', Validators.compose([Validators.required])],
            lastName: ['', Validators.compose([Validators.required])],
            phoneNumber: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]')])],
          });

          this.frameworks = [
            "NativeScript",
            "Xamarin",
            "Onsen UI",
            "Ionic Framework",
            "React Native"
        ];
    }

    public close() {
        this.params.closeCallback(/* this.contact */);
    }

    addContact() {
        let contact: Contact = {
            firstName: this.contactsForm.value.firstName,
            lastName: this.contactsForm.value.lastName,
            phoneNumber: this.contactsForm.value.phoneNumber,
        }
        console.log(JSON.stringify(contact));
        this.params.closeCallback(contact);
    }

}