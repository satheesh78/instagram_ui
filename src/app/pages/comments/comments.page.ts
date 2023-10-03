import { ShareModalPage } from './../share-modal/share-modal.page';
import { Router } from '@angular/router';
import { DummyService } from './../../services/dummy.service';
import { NavController, ModalController } from '@ionic/angular';
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
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {

    users = [];
    constructor(private dummy: DummyService,private navCtrl: NavController, private modalCtrl: ModalController) {
        this.users = this.dummy.users;
    }

    ngOnInit() {
    }

    goBack() {
        this.navCtrl.back();
    }

    async openShareModal() {
        const modal = await this.modalCtrl.create({
            component: ShareModalPage,
            cssClass: 'share_modal'
        });
        modal.present();
    }

}
