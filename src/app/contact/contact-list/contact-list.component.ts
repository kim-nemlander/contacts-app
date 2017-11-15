import {Component, OnInit} from '@angular/core';
import {ContactService} from '../services/contact.service';
import {Contact} from '../contact';

@Component({
  selector: 'ca-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  titleContactList: string;
  contacts: Contact [];

  constructor(private contactService: ContactService) {
    this.titleContactList = 'List of Contacts';
  }

  ngOnInit() {
    this.contacts = this.contactService.findContacts();
  }

onContactSelect(contact: Contact){
console.log(contact);
  }
}
