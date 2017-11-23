import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SubscriptionListComponent } from './subscription-list/subscription-list.component';

import { AboutUsService } from './about-us/services/about-us.service';

const appRoutes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'subscription-list', component: SubscriptionListComponent }
  //{path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    AboutUsComponent,
    SubscriptionListComponent,
  ],
  imports: [
  	RouterModule.forRoot(
      appRoutes
     ),
    BrowserModule,
    HttpModule
  ],
  providers: [AboutUsService],
  bootstrap: [AppComponent]
})

export class AppModule { }