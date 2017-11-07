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

  constructor(private contactService: ContactService) {
    this.title = 'List of Contacts';
  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }
}
