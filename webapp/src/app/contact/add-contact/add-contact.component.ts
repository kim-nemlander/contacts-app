import {Component, OnInit} from '@angular/core';
import {ContactService} from '../services/contact.service';
import {Contact} from '../contact';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

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
  phoneNumber: string;
  streetAddress: string;
  city: string;

  constructor(private contactService: ContactService, private location: Location, private router: Router) {
    this.contacts = [];
    this.titleAddContacts = 'Add a New Contact';
    this.firstName = '';
    this.lastName = '';
    this.phoneNumber = '';
    this.streetAddress = '';
    this.city = '';
  }

  ngOnInit() {
  }

  saveContact() {
    const contact: Contact = new Contact(this.id, this.firstName, this.lastName, this.phoneNumber, this.streetAddress, this.city);
    this.firstName = '';
    this.lastName = '';
    this.phoneNumber = '';
    this.streetAddress = '';
    this.city = '';
    console.log(contact);
    this.contactService.saveContact(contact).subscribe();
    this.location.back();
  }
  showContactList() {
    this.router.navigate(['/contacts']);
  }
}
