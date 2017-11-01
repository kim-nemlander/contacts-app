import {Injectable} from '@angular/core';
import {Contact} from '../contact';

@Injectable()
export class ContactService {

  private contacts: Contact[];

  constructor() {
    this.contacts = [
      new Contact(1, 'Bruce', 'Dickinson', '045123456789', 'Maiden Street 666', 'Cardiff')
    ];
  }

  getContacts(): Contact[] {
    return this.contacts;
  }

  addContact(contact: Contact) {
    this.contacts.push(contact);
  }
}
