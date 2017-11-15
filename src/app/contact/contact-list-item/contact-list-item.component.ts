import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {Router} from '@angular/router';
import {ContactService} from '../services/contact.service';

@Component({
  selector: 'ca-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {

  @Input() contact: Contact;

  constructor(private router: Router, private contactService: ContactService) {
  }

  ngOnInit() {}

  showEditContactField() {
    this.router.navigate( ['/edit-contact-field']);
  }
  editContact() {
    this.contactService.editContact(this.contact);
  }
}

