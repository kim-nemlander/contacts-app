import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ca-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {

  }

  showContactList() {
    this.router.navigate(['/contacts']);
  }

  showAddContact() {
    this.router.navigate(['/add-contact']);
  }

  showEditContact() {
    this.router.navigate(['/edit-contact']);
  }

  showEditContactField() {
    this.router.navigate( ['/edit-contact-field']);
  }

}

