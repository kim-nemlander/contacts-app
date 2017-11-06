import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ContactListComponent} from './contact/contact-list/contact-list.component';
import {ContactService} from './contact/services/contact.service';
import {MaterialComponentsModule} from './material-components/material-components.module';
import {ContactListItemComponent} from './contact/contact-list-item/contact-list-item.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'contacts',
    component: ContactListComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent
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
