import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OrderModule } from 'ngx-order-pipe';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteNewComponent } from './quotes/quote-new/quote-new.component';
import { QuoteListComponent } from './quotes/quote-list/quote-list.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteNewComponent,
    QuoteListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
