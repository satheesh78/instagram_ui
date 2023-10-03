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
  selector: 'app-add-saved',
  templateUrl: './add-saved.page.html',
  styleUrls: ['./add-saved.page.scss'],
})
export class AddSavedPage implements OnInit {

    posts = [];
    constructor(private dummy: DummyService, private navCtrl: NavController, private router: Router,
      private modalCtrl: ModalController) {
        this.posts = this.dummy.posts;
    }

    ngOnInit() {
    }

    goBack() {
        this.navCtrl.back();
    }

    goToCreateCollection() {
        this.modalCtrl.dismiss();
        this.router.navigate(['/create-collection']);
    }

}
