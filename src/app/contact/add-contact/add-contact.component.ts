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
    this.titleAddContacts = 'Add a New Contact';
    this.firstName = '';
    this.lastName = '';
    this.phone = '';
    this.streetAddress = '';
    this.city = '';
  }

  ngOnInit() {}

  saveContact() {
    let contact: Contact = new Contact(this.id, this.firstName, this.lastName, this.phone, this.streetAddress, this.city);
    this.firstName = '';
    this.lastName = '';
    this.phone = '';
    this.streetAddress = '';
    this.city = '';
    console.log(contact);
    this.contactService.saveContact(contact);
  }
}
