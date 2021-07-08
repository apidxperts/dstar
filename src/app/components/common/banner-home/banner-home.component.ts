import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-banner-home',
  templateUrl: './banner-home.component.html',
  styleUrls: ['./banner-home.component.scss']
})
export class BannerHomeComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) {}

  public onClick(elementId: string): void { 
      this.viewportScroller.scrollToAnchor(elementId);
  }

  ngOnInit() {
  }

}
