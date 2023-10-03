import { DummyService } from './../../services/dummy.service';
import { Router } from '@angular/router';
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic6clone apps Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    avatarSlide = {
        slidesPerView: 3.5,
        zoom: false
    };
    users: any[] = [];
    posts: any[] = [];

    constructor(private router: Router, private dummy: DummyService, private modalController: ModalController) {
        this.users = this.dummy.users;
        this.posts = this.dummy.posts;
    }

    ngOnInit() {

    }

    ionViewDidEnter() {
        // setTimeout(() => {
        //     this.presentModal();
        // }, 3000);
    }

    selectedStory(story, index) {
        this.router.navigate(['full-screen-story']);
    }

    openChatScreen() {
        this.router.navigate(['inbox']);
    }

    // async presentModal() {
    //     const modal = await this.modalController.create({
    //         component: SubscribePage,
    //         cssClass: 'modalContact',
    //         backdropDismiss: true,
    //         showBackdrop: true
    //     });
    //     await modal.present();
    // }

}
