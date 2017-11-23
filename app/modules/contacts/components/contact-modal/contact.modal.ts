import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
// import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { Contact } from "../../models/contacts.model";

@Component({
    selector: "contact-modal",
    moduleId: module.id,
    templateUrl: "./contact.modal.html",
    styleUrls: ["./contact.modal.scss"]
})
export class ContactModalComponent {

    private contactsForm: FormGroup;
    submitAttempt: boolean = false;

    public constructor(
        private params: ModalDialogParams,
        private formBuilder: FormBuilder) {

        this.contactsForm = formBuilder.group({
            firstName: ['', Validators.compose([Validators.required])],
            lastName: ['', Validators.compose([Validators.required])],
            phoneNumber: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
        });
    }

    public cancel() {
        this.params.closeCallback();
    }

    addContact() {
        this.submitAttempt = true;
        if (this.contactsForm.valid) {
            let contact: Contact = {
                firstName: this.contactsForm.value.firstName,
                lastName: this.contactsForm.value.lastName,
                phoneNumber: this.contactsForm.value.phoneNumber,
            }
            console.log(JSON.stringify(contact));
            this.params.closeCallback(contact);
        }
    }

}