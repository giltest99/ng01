import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page2Component } from './page2/page2.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    Page2Component,
    HomeComponent,
    NotFoundComponent,
    HeaderComponent,
    UsersComponent,
    HeroBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
