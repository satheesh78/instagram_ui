/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic6clone apps Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-feeds',
  templateUrl: './image-feeds.component.html',
  styleUrls: ['./image-feeds.component.scss'],
})
export class ImageFeedsComponent implements OnInit {

    @Input() image: any;

    constructor() { }

    ngOnInit() {}

}
