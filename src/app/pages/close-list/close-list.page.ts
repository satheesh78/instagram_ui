import { DummyService } from './../../services/dummy.service';
import { NavController } from '@ionic/angular';
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
  selector: 'app-close-list',
  templateUrl: './close-list.page.html',
  styleUrls: ['./close-list.page.scss'],
})
export class CloseListPage implements OnInit {

    users = [];
    constructor(private navCtrl: NavController, private dummy: DummyService) {
        this.users = this.dummy.users;
    }

    ngOnInit() {
    }

    goBack() {
        this.navCtrl.back();
    }

}
