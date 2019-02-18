import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TextBoxComponent } from './text-box/text-box.component';
import { SearchComponent } from './search/search.component';
import { CarImageComponent } from './car-image/car-image.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';

@NgModule({
  declarations: [
    AppComponent,
    TextBoxComponent,
    SearchComponent,
    CarImageComponent,
    RadioButtonComponent,
    NgbModule
  ],
  imports: [
    BrowserModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
