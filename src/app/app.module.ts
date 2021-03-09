import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { PageModule } from './core/pages/page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { NavBarComponent } from './core/components/nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { CartComponent } from './core/components/cart/cart.component';
import { CartItemComponent } from './core/components/cart-item/cart-item.component';
import { environment } from '../environments/environment';

// Angular fire authentication currently has a conflict with firebase authentication when run in the emulator.
// Firebase has to be initialized twice in order to overcome this issue
// (see https://stackoverflow.com/questions/65025005/angularfireauth-emulator-login-is-lost-on-page-reload)
import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp(environment.firebaseConfig);
app.auth().useEmulator('http://localhost:9099');

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CartComponent,
    CartItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PageModule,
    BrowserAnimationsModule,
    LayoutModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'de' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
