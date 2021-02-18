import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ transform: 'translateX(-100%)' }),
            animate('0.3s ease-out', 
                    style({ transform: 'translateX(0)' }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ transform: 'translateX(0)'}),
            animate('0.3s ease-in', 
                    style({ transform: 'translateX(-100%)'}))
          ]
        )
      ]
    )
  ]
})
export class NavBarComponent implements OnInit {

  @Input() shouldHaveBackground = true

  isMobile = false
  isExpanded = false

  navShouldHide = false

  constructor(public breakpointObserver: BreakpointObserver, private router: Router, private activatedRoute: ActivatedRoute) {
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        console.log(val['url'])
        if(val['url'] == '/create') {
          this.navShouldHide = true
        } else {
        this.navShouldHide = false
      }
    }
  });
  }

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe((state: BreakpointState) => {
          this.isMobile = state.matches
      })
  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded
    if (this.isExpanded) {
      document.body.classList.add('fixed')
    } else {
      document.body.classList.remove('fixed')
    }
    
  }
}
