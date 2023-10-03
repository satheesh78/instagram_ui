/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic6clone apps Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform} from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public activatedRoute: Router, private platform: Platform) {
    this.backButtonEvent();
  }

  backButtonEvent() {
    console.log(this.activatedRoute.url);
    this.platform.backButton.subscribeWithPriority(0, () => {     
        if (this.activatedRoute.url != '/') {        
        } else if (this.activatedRoute.url === '/') {
             navigator['app'].exitApp();
        }
    });
  }


}
