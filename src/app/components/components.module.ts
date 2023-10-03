/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic6clone apps Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { ImageFeedsComponent } from './image-feeds/image-feeds.component';
import { VideoFeedsComponent } from './video-feeds/video-feeds.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { StoryComponent } from './story/story.component';
import { FeedsComponent } from './feeds/feeds.component';

const components = [
    StoryComponent,
    FeedsComponent,
    VideoFeedsComponent,
    ImageFeedsComponent
];
@NgModule({
    declarations: [
        components
    ],
    imports: [
        CommonModule,
        IonicModule,

    ],
    exports: [
        ...components,

    ]
})
export class ComponentsModule { }
