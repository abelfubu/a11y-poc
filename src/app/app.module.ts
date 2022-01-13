import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TicketSelectorComponent } from './ticket-selector/ticket-selector.component';
import { TicketItemComponent } from './ticket-item/ticket-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketSelectorComponent,
    TicketItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
