/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic6clone apps Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video-feeds',
  templateUrl: './video-feeds.component.html',
  styleUrls: ['./video-feeds.component.scss'],
})
export class VideoFeedsComponent implements OnInit {

  @ViewChild('videoPlayer', { read: ElementRef, static: false }) videoPlayer: ElementRef;
  flagVideo: boolean;
  constructor() {
    this.flagVideo = true;
  }

  ngOnInit() { }
  toggleVideo() {
    this.flagVideo = !this.flagVideo;
    if (this.flagVideo) {
      this.videoPlayer.nativeElement.pause();
    } else if (!this.flagVideo) {
      this.videoPlayer.nativeElement.play();
    }
  }

}
