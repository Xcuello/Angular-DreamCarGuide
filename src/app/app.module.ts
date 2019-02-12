import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextBoxComponent } from './text-box/text-box.component';
import { SearchComponent } from './search/search.component';
import { CarImageComponent } from './car-image/car-image.component';

@NgModule({
  declarations: [
    AppComponent,
    TextBoxComponent,
    SearchComponent,
    CarImageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
