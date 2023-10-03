/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic6clone apps Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReelsPage } from './reels.page';

const routes: Routes = [
  {
    path: '',
    component: ReelsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReelsPageRoutingModule {}
