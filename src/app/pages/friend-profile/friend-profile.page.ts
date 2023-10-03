import { NotificationSettingsPage } from './../notification-settings/notification-settings.page';
import { Router } from '@angular/router';
import { NavController, ActionSheetController, ModalController } from '@ionic/angular';
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
  selector: 'app-friend-profile',
  templateUrl: './friend-profile.page.html',
  styleUrls: ['./friend-profile.page.scss'],
})
export class FriendProfilePage implements OnInit {

    tabID = 'post';
    posts = [];

    constructor(private dummy: DummyService, private navCtrl: NavController,
      private actionSheetCtrl: ActionSheetController, private modalCtrl: ModalController) {
        this.posts = this.dummy.posts;
    }

    ngOnInit() {
    }

    goBack() {
        this.navCtrl.back();
    }

    segmentChanged(eve) {
        this.tabID = eve.detail.value;
    }

    async openNotificationSettings() {
        const modal = await this.modalCtrl.create({
            component: NotificationSettingsPage,
            cssClass: 'notification_modal'
        });
        modal.present();
    }

    async presentActionSheet() {
        const actionSheet = await this.actionSheetCtrl.create({
            mode: 'md',
            cssClass: 'bottom_menu',
            buttons: [
                {
                    text: 'Report...',
                    handler: () => {
                      console.log('Report clicked');
                    }
                },
                {
                    text: 'Block',
                    handler: () => {
                      console.log('Block clicked');
                    }
                },
                {
                    text: 'About This Account',
                    handler: () => {
                      console.log('Account clicked');
                    }
                },
                {
                    text: 'Restrict',
                    handler: () => {
                      console.log('Restrict clicked');
                    }
                },
                {
                    text: 'Hide Your Story',
                    handler: () => {
                      console.log('Story clicked');
                    }
                },
                {
                    text: 'Copy Profile URL',
                    handler: () => {
                      console.log('Profile clicked');
                    }
                },
                {
                    text: 'Share this Profile',
                    handler: () => {
                      console.log('Share clicked');
                    }
                }
            ]
        });
        await actionSheet.present();

        const { role, data } = await actionSheet.onDidDismiss();
        console.log('onDidDismiss resolved with role and data', role, data);
    }

}
