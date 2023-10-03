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
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {

    posts: any[] = [];
    constructor(private navCtrl: NavController, private dummy: DummyService) {
        this.posts = this.dummy.posts;
    }

    ngOnInit() {

    }

    goBack() {
        this.navCtrl.back();
    }

}
