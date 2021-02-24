import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss']
})
export class ProductBoxComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
  openDetail(event: Event) {
    const selectedElement = (event.target as HTMLElement).className
    if(selectedElement == 'style-image') {
      console.log('style selected')
    } else if(selectedElement == 'product-image' || selectedElement == 'arrow') {
      this.router.navigate(['shop/1'])
    }
  }

}
