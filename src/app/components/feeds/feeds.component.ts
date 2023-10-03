/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic6clone apps Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss'],
})
export class FeedsComponent implements OnInit {

  @Input() page: any;
  @Input() posts: any;

  sliderSugggest = {
    slidesPerView: 2.3,
  };

  constructor(private router: Router) {
      console.log(">>>>>>>>",this.page)
  }

  ngOnInit() { }

  onProfileClick() {
  }

  openComments() {
    this.router.navigate(['comments']);
  }

  onClick() {
  }

}
