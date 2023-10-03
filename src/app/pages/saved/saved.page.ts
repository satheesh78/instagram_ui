import { AddSavedPage } from './../add-saved/add-saved.page';
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
  selector: 'app-saved',
  templateUrl: './saved.page.html',
  styleUrls: ['./saved.page.scss'],
})
export class SavedPage implements OnInit {

    posts = [];
    constructor(private navCtrl: NavController, private dummy: DummyService,
      private modalCtrl: ModalController, private router: Router) {
        this.posts = this.dummy.posts;
    }

    ngOnInit() {
    }

    goBack() {
        this.navCtrl.back();
    }

    async goToAddSaved() {
        const modal = await this.modalCtrl.create({
            component: AddSavedPage
        });
        modal.present();
    }

    goToAllSaved() {
        this.router.navigate(['all-saved']);
    }

}
