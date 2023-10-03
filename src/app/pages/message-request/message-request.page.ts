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
  selector: 'app-message-request',
  templateUrl: './message-request.page.html',
  styleUrls: ['./message-request.page.scss'],
})
export class MessageRequestPage implements OnInit {

    constructor(private navCtrl: NavController) { }

    ngOnInit() {
    }

    goBack() {
        this.navCtrl.back();
    }

}
