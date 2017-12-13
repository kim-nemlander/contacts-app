import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Contact} from '../contact/contact';

@Component({
  selector: 'ca-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit {

  @Input() contact: Contact;
  sourceUrl: any;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    //
    this.sourceUrl = 'https://www.google.com/maps?q=' + this.contact.streetAddress + ', ' + this.contact.city + '&output=embed';
    console.log(this.sourceUrl);
    this.sourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.sourceUrl);
  }

}
