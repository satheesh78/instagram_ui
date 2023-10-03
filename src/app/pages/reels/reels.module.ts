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

import { ReelsPageRoutingModule } from './reels-routing.module';

import { ReelsPage } from './reels.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReelsPageRoutingModule
  ],
  declarations: [ReelsPage]
})
export class ReelsPageModule {}
