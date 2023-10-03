import { DummyService } from './../../services/dummy.service';
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic6clone apps Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-modal',
  templateUrl: './share-modal.page.html',
  styleUrls: ['./share-modal.page.scss'],
})
export class ShareModalPage implements OnInit {

    users = [];

    constructor(private dummy: DummyService) {
        this.users = this.dummy.users;
    }

    ngOnInit() {
    }

}
