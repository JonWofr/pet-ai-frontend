import { BrowserModule } from '@angular/platform-browser';
import { PageModule } from './core/pages/page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './core/components/nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { CartComponent } from './core/components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    PageModule,
    BrowserAnimationsModule,
    LayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
