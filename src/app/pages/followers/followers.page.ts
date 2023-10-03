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
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.page.html',
  styleUrls: ['./followers.page.scss'],
})
export class FollowersPage implements OnInit {

    users = [];
    tabID = 'followers';

    constructor(private dummy: DummyService, private navCtrl: NavController, private alertCtrl: AlertController) {
        this.users = this.dummy.users;
    }

    ngOnInit() {
    }

    goBack() {
        this.navCtrl.back();
    }

    segmentChanged(eve) {
        this.tabID = eve.detail.value;
    }

    async presentAlertRadio() {
        const alert = await this.alertCtrl.create({
            cssClass: 'sort_modal',
            mode: 'md',
            header: 'Sort By',
            inputs: [
                {
                    name: 'radio1',
                    type: 'radio',
                    label: 'Default',
                    value: 'value1',
                    handler: () => {
                        console.log('Radio 1 selected');
                    },
                    checked: true
                },
                {
                    name: 'radio2',
                    type: 'radio',
                    label: 'Date Followed: Latest',
                    value: 'value2',
                    handler: () => {
                        console.log('Radio 2 selected');
                    }
                },
                {
                    name: 'radio3',
                    type: 'radio',
                    label: 'Date Followed: Earliest',
                    value: 'value3',
                    handler: () => {
                        console.log('Radio 3 selected');
                    }
                }
            ]
        });
        await alert.present();
    }

}
