import { Router } from '@angular/router';
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
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {

    users = [];
    tabID = 'chats';

    constructor(private navCtrl: NavController, private dummy: DummyService, private router: Router) {
        this.users = this.dummy.users;
    }

    ngOnInit() {
    }

    goBack() {
        this.navCtrl.back();
    }

    segmentChanged(eve) {
        this.tabID = eve.detail.value;
        if(this.tabID == 'request') {
            this.router.navigate(['/message-request']);
        }
    }

    goToMessages() {
        this.router.navigate(['/message']);
    }

}
