import {Component, OnInit} from '@angular/core';
import {ContactService} from '../services/contact.service';
import {Contact} from '../contact';
import {Router} from '@angular/router';

@Component({
  selector: 'ca-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  title: string;
  contacts: Contact[];

  constructor(private contactService: ContactService, private router: Router) {
    this.title = 'Edit Contacts';
  }

  ngOnInit() {
    this.contacts = this.contactService.findContacts();
  }

  onContactSelect(contact: Contact){
    console.log(contact);
    this.router.navigate(['edit-contact', contact.id]);
  }
}
