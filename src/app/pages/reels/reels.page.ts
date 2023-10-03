/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic6clone apps Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { DummyService } from './../../services/dummy.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides, ModalController } from '@ionic/angular';
import { CommentsPage } from '../comments/comments.page';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-reels',
  templateUrl: './reels.page.html',
  styleUrls: ['./reels.page.scss'],
})
export class ReelsPage implements OnInit {
  @ViewChild('slides', { static: true }) slides: IonSlides;

  slideOpts = {
    direction: 'vertical',
    slidesPerView: 1,
  };

  demos = [];
  currentVideo: any;
  isDescView = false;

  constructor(private dummy: DummyService, private actionSheetCtrl: ActionSheetController) {
    this.demos = this.dummy.demos;
  }

  slideDidChange(ev: any) {
    this.slides.getActiveIndex().then((index: number) => {
      console.log('current', this.currentVideo);
    });
  };

  ngOnInit() {
  }

  toggleText() {
    this.isDescView = !this.isDescView;
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
          text: 'Not Interested',
          handler: () => {
            console.log('Not Interested clicked');
          }
        },
        {
          text: 'Copy Link',
          handler: () => {
            console.log('Copy clicked');
          }
        },
        {
          text: 'Share to...',
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Save',
          handler: () => {
            console.log('Save clicked');
          }
        },
        {
          text: 'Remix This Reel',
          handler: () => {
            console.log('Remix clicked');
          }
        }
      ]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }
}
