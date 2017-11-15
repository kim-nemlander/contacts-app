import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'ca-edit-contact-field',
  templateUrl: './edit-contact-field.component.html',
  styleUrls: ['./edit-contact-field.component.css']
})
export class EditContactFieldComponent implements OnInit {

  titleEditContactField: string;
  contact: Contact;
  contacts: Contact [];
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  streetAddress: string;
  city: string;
  isNewContact: boolean;

  constructor(private contactService: ContactService, private route: ActivatedRoute, private location: Location) {
    this.contacts = [];
    this.titleEditContactField = 'Edit Contact';
    this.firstName = '';
    this.lastName = '';
    this.phone = '';
    this.streetAddress = '';
    this.city = '';
    this.isNewContact = true;
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.contact = this.contactService.findContactById(parseInt(id, 10));
      this.isNewContact = false;
    }
  }

  editContact() {
    this.contactService.editContact(this.contact);
    this.location.back();
  }
}
