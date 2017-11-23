import { Contact } from "../modules/contacts/models/contacts.model";
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sortContacts',
    pure: false
})
export class SortingContactsPipe implements PipeTransform {

    transform(contacts: Contact[], path: string): Contact[] {

        // Check if is not null
        if (!contacts || !path) return contacts;

        return contacts.sort((a: Contact, b: Contact) => {
            // We go for each property followed by path
            // path.forEach(property => {
                a = a[path];
                b = b[path];
            // })

            // Order * (-1): We change our order
            return a > b ? 1 : - 1;
        })
    }

}