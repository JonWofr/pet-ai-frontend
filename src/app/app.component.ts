import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  NavigationEnd,
  NavigationStart,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { slideInRoutingAnimation } from './app-routing-animations';
import { slideInOutLeft } from './shared/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInRoutingAnimation],
})
export class AppComponent implements OnInit {
  title = 'petai-frontend';

  constructor(private auth: AngularFireAuth) {}

  ngOnInit(): void {
    this.auth.onAuthStateChanged((user) => {
      if (!user) {
        console.log('Signing in user');
        this.auth.signInAnonymously();
        console.log('User signed in');
      } else {
        console.log('User already signed in');
        console.log(user);
      }
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
}
