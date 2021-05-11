import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, FlexLayoutModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
