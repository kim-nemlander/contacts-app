import {Component, OnInit} from '@angular/core';
import {ContactService} from '../services/contact.service';
import {Contact} from '../contact';
import {Router} from '@angular/router';

@Component({
  selector: 'ca-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  titleContactList: string;
  contacts: Contact [];

  constructor(private contactService: ContactService, private router: Router) {
    this.titleContactList = 'List of Contacts';
  }

  ngOnInit() {
    this.contacts = this.contactService.findContacts();
  }

  onContactSelect(contact: Contact) {
    console.log(contact);
    this.router.navigate(['edit-contact', contact.id]);
  }
}
