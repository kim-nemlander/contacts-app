import {Component, OnInit} from '@angular/core';
import {ContactService} from '../services/contact.service';
import {Contact} from '../contact';

@Component({
  selector: 'ca-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  titleAddContacts: string;
  contacts: Contact [];
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  streetAddress: string;
  city: string;

  constructor(private contactService: ContactService) {
    this.contacts = [];
    this.titleAddContacts = 'Add New Contact';
    this.id = 0;
    this.firstName = '';
    this.lastName = '';
    this.phone = '';
    this.streetAddress = '';
    this.city = '';
  }

  ngOnInit() {}

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
