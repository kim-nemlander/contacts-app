import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
  MatSidenavModule, MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

const materialModules = [
  FormsModule,
  BrowserAnimationsModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  FlexLayoutModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatSidenavModule,
  MatDialogModule,
];

@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class MaterialComponentsModule {
}
