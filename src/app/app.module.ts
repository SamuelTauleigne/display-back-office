import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilesComponent } from './profiles/profiles.component';

import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    ProfilesComponent,
    MessagesComponent,
    DashboardComponent,
    ProfileDetailComponent
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
