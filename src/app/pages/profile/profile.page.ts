import { Router } from '@angular/router';
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
import { ActionSheetController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

    users = [];
    tabID = 'post';
    posts = [];

    constructor(private router: Router, private dummy: DummyService, private actionSheetCtrl: ActionSheetController) {
        this.users = this.dummy.users;
        this.posts = this.dummy.posts;
    }

    ngOnInit() { }

    goToEditProfile() {
        this.router.navigate(['/edit-profile']);
    }

    goToFollowers() {
        this.router.navigate(['/followers']);
    }

    async presentActionSheet() {
        const actionSheet = await this.actionSheetCtrl.create({
            mode: 'md',
            cssClass: 'bottom_menu',
            buttons: [
                {
                    text: 'Settings',
                    icon: 'settings-outline',
                    handler: () => {
                        console.log('Settings clicked');
                        this.router.navigate(['/settings']);
                    }
                },
                {
                    text: 'Archive',
                    icon: 'sync-outline',
                    handler: () => {
                      console.log('Share clicked');
                    }
                },
                {
                    text: 'Your Activity',
                    icon: 'time-outline',
                    handler: () => {
                        console.log('Activity clicked');
                        this.router.navigate(['/your-activity']);
                    }
                },
                {
                    text: 'QR Code',
                    icon: 'qr-code-outline',
                    handler: () => {
                      console.log('Favorite clicked');
                    }
                },
                {
                    text: 'Saved',
                    icon: 'bookmark-outline',
                    handler: () => {
                        console.log('Saved clicked');
                        this.router.navigate(['/saved']);
                    }
                },
                {
                    text: 'Close Friends',
                    icon: 'list-outline',
                    handler: () => {
                      console.log('Friends clicked');
                      this.router.navigate(['/close-friends']);
                    }
                },
                {
                    text: 'COVID-19 Information Center',
                    icon: 'heart-outline',
                    handler: () => {
                      console.log('Cancel clicked');
                    }
                }
            ]
        });
        await actionSheet.present();

        const { role, data } = await actionSheet.onDidDismiss();
        console.log('onDidDismiss resolved with role and data', role, data);
    }

    segmentChanged(eve) {
        this.tabID = eve.detail.value;
    }

    goToPosts() {
        this.router.navigate(['/posts']);
    }
}
