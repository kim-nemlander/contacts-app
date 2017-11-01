import {Component, OnInit} from '@angular/core';
import {ContactService} from '../services/contact.service';
import {Contact} from '../contact';

@Component({
  selector: 'ca-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  title: string;
  contacts: Contact [];
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  streetAddress: string;
  city: string;

  constructor(private contactService: ContactService) {
    this.contacts = [];
    this.title = 'Contacts';
    this.id = 0;
    this.firstName = '';
    this.lastName = '';
    this.phone = '';
    this.streetAddress = '';
    this.city = '';

  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

  addContact() {
    let contact: Contact = new Contact(this.id, this.firstName, this.lastName, this.phone, this.streetAddress, this.city);
    this.id = 0;
    this.firstName = '';
    this.lastName = '';
    this.phone = '';
    this.streetAddress = '';
    this.city = '';
    console.log(contact);
    this.contactService.addContact(contact);

  }

}
