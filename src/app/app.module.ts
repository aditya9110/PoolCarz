import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BookRideComponent } from './book-ride/book-ride.component';
import { HoverDirectiveDirective } from './hover-directive.directive';
import { RidefilterPipe } from './ridefilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookRideComponent,
    HoverDirectiveDirective,
    RidefilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
