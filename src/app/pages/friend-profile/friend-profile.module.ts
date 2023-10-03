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

import { FriendProfilePageRoutingModule } from './friend-profile-routing.module';

import { FriendProfilePage } from './friend-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FriendProfilePageRoutingModule
  ],
  declarations: [FriendProfilePage]
})
export class FriendProfilePageModule {}
