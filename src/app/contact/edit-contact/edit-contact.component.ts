import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {ConfirmDeleteComponent} from './confirm-delete/confirm-delete.component';

@Component({
  selector: 'ca-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  titleEditContact: string;
  contact: Contact;
  contacts: Contact [];
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  streetAddress: string;
  city: string;
  isNewContact: boolean;
  editMode: boolean;

  constructor(private contactService: ContactService, private route: ActivatedRoute, private location: Location, private router: Router,
              public dialog: MatDialog) {
    this.contacts = [];
    this.titleEditContact = 'Edit Contact';
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
      this.editMode = true;
      this.contact = this.contactService.findContactById(parseInt(id, 10));
      this.isNewContact = false;
    } else {
      this.editMode = false;
      this.contact.id = null;
    }
  }

  editContact() {
    this.contactService.editContact(this.contact);
    this.location.back();
  }

  deleteContact() {
    this.contactService.deleteContact(this.contact);
    this.location.back();
  }

  showContactList() {
    this.router.navigate(['/contacts']);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {width: '250px'});
    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.deleteContact();
      }
    });
  }
    }
