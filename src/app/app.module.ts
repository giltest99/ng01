import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page2Component } from './page2/page2.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { GenericButtonComponent } from './generic-button/generic-button.component';
import { MonFormulaireComponent } from './mon-formulaire/mon-formulaire.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HelloComponent } from './hello/hello.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';

@NgModule({
  declarations: [
    AppComponent,
    Page2Component,
    HomeComponent,
    NotFoundComponent,
    HeaderComponent,
    UsersComponent,
    HeroBannerComponent,
    GenericButtonComponent,
    MonFormulaireComponent,
    HelloComponent,
    Page3Component,
    Page4Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
