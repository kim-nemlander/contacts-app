import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ContactListComponent} from './contact/contact-list/contact-list.component';
import {ContactService} from './contact/services/contact.service';
import {MaterialComponentsModule} from './material-components/material-components.module';
import {ContactListItemComponent} from './contact/contact-list-item/contact-list-item.component';
import {RouterModule, Routes} from '@angular/router';
import {AddContactComponent} from './contact/add-contact/add-contact.component';
import {EditContactComponent} from './contact/edit-contact/edit-contact.component';
import {GoogleMapsComponent} from './google-maps/google-maps.component';
import {ConfirmDeleteComponent} from './contact/edit-contact/confirm-delete/confirm-delete.component';

const routes: Routes = [
  {
    path: 'contacts',
    component: ContactListComponent
  }, {
    path: 'add-contact',
    component: AddContactComponent
  }, {
    path: 'edit-contact',
    component: EditContactComponent
  }, {
    path: 'edit-contact/:id',
    component: EditContactComponent
  }, {
    path: 'confirm-delete',
    component: ConfirmDeleteComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    AddContactComponent,
    EditContactComponent,
    GoogleMapsComponent,
    ConfirmDeleteComponent,
  ],
  imports: [
    BrowserModule,
    MaterialComponentsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
