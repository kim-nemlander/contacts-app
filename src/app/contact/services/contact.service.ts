import {Injectable} from '@angular/core';
import {Contact} from '../contact';

@Injectable()
export class ContactService {

  localStorageKey: string;

  private contacts: Contact[];

  constructor() {
    this.contacts = [];
    this.localStorageKey = 'ca-contacts';
    this.initializeLocalStorage();
  }

  public findContacts(): Contact[] {
    return this.readLocalStorageContacts();
  }

  public saveContact(contact: Contact) {
    const contacts = this.readLocalStorageContacts();
    contacts.push(contact);
    this.writeLocalStorageContacts(contacts);
  }

  private initializeLocalStorage() {
    if (!localStorage.getItem(this.localStorageKey)) {
      localStorage.setItem(this.localStorageKey, JSON.stringify([]));
    }
  }

  private readLocalStorageContacts(): Contact[] {
    const data = localStorage.getItem(this.localStorageKey);
    return JSON.parse(data) as Contact[];
  }

  private writeLocalStorageContacts(contacts: Contact[]) {
    const data = JSON.stringify(contacts);
    localStorage.setItem(this.localStorageKey, data);
  }

  getContacts(): Contact[] {
    return this.contacts;
  }

  addContact(contact: Contact) {

    // Find current max id

    let currentMaxId;
    if(this.contacts.length === 0) {
      currentMaxId = 0;
    } else {
      currentMaxId = Math.max(...this.contacts.map(c => c.id));
      console.log(this.contacts.map(c => c.id));
      console.log('maxId, 1: ' + currentMaxId);
    }

    // Assign new id, current max id +1

    const newId: number = currentMaxId + 1;
    contact.id = newId;

    // Push new contact to the contacts array

    this.contacts.push(contact);
  }
}
