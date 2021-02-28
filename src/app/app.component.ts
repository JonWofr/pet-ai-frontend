import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterModule, RouterOutlet } from '@angular/router';
import { slideInRoutingAnimation } from './app-routing-animations';
import { slideInOutLeft } from './shared/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
   
  ]
})
export class AppComponent {
  title = 'petai-frontend';

  }

  

