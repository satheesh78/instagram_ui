/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic6clone apps Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourActivityPageRoutingModule } from './your-activity-routing.module';

import { YourActivityPage } from './your-activity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourActivityPageRoutingModule
  ],
  declarations: [YourActivityPage]
})
export class YourActivityPageModule {}
