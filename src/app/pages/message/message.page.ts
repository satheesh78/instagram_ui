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
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

    messages = [
        {
            side : 'left',
            msg : 'Hello'
        },
        {
            side : 'right',
            msg : 'Hii'
        },
        {
            side : 'left',
            msg : 'Are you nearby ?'
        },
        {
            side : 'right',
            msg : 'I will be there in few mins'
        },
        {
            side : 'left',
            msg : 'Ok, I am waiting at vinmark Store'
        },
        {
            side : 'right',
            msg : 'Sorry I am stuck in traffic. Please give me a moment.'
        }
    ];

    constructor(private navCtrl: NavController) { }

    ngOnInit() {
    }

    goBack() {
        this.navCtrl.back();
    }

}
