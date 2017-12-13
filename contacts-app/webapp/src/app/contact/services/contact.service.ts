import {Injectable} from '@angular/core';
import {Contact} from '../contact';
import * as _ from 'lodash';

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

    this.contacts = this.readLocalStorageContacts();

    return this.contacts;
  }

  public findContactById(id: number): Contact {
    const contacts = this.readLocalStorageContacts();
    return _.find(contacts, {'id': id});
  }

  public saveContact(contact: Contact) {

    let currentMaxId;
    if (this.contacts.length === 0) {
      currentMaxId = 0;
    } else {
      currentMaxId = Math.max(...this.contacts.map(c => c.id));
      console.log(this.contacts.map(c => c.id));
      console.log('maxId, 1: ' + currentMaxId);
    }

    const newId: number = currentMaxId + 1;
    contact.id = newId;

    this.contacts.push(contact);
    this.writeLocalStorageContacts(this.contacts);
  }

  public editContact(contact: Contact) {
    const index = _.findIndex(this.contacts, c => c.id === contact.id);
    this.contacts[index] = contact;
    this.writeLocalStorageContacts(this.contacts);
  }

  public deleteContact(contact: Contact) {
    const index = _.findIndex(this.contacts, c => c.id === contact.id);
    this.contacts[index] = contact;
    _.remove(this.contacts, {'id': contact.id});
    this.writeLocalStorageContacts(this.contacts);
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


}
