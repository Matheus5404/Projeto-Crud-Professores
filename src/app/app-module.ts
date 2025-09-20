import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CrudComponent } from './crud-component/crud-component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home-component/home-component';
import { FooterComponent } from './footer-component/footer-component';
import { NavBarComponent } from './nav-bar-component/nav-bar-component';
import { DisciplineComponent } from './discipline-component/discipline-component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    CrudComponent,
    HomeComponent,
    FooterComponent,
    NavBarComponent,
    DisciplineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
